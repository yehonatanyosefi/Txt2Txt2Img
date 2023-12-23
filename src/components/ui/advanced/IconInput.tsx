'use client'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/Icon'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { InputMsg, InputMsgProps } from '@/components/ui/advanced/InputMsg'
import React, { useState } from 'react'
import { STYLE_NO_INPUT_BORDER, STYLE_INPUT_BORDER } from '@/lib/consts'

type IconInputProps = {
	type: string
	placeholder: string
	value: string
	iconName?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	messageInfo?: InputMsgProps
	className?: string
	inputId?: string
}
const ICON_STYLE = `flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200 ease`
const IconInput = React.forwardRef<
	HTMLInputElement,
	IconInputProps & React.ComponentPropsWithoutRef<'div'>
>(({ type, placeholder, iconName, value, onChange, messageInfo, className, inputId, ...props }, ref) => {
	const [showPass, setShowPass] = useState(false)
	const [isFocused, setIsFocused] = useState(false)
	const handleFocus = () => setIsFocused(true)
	const handleBlur = () => setIsFocused(false)

	const focusedTextColor = isFocused ? 'text-gray-700' : 'text-gray-500'
	const inputClassAddition = !iconName ? 'ps-0' : 'ps-3'
	const eyeClassAddition = type === 'password' && value ? 'me-2' : ''
	let wrapperClassAddition = ''
	switch (messageInfo?.type) {
		case 'error':
			wrapperClassAddition = 'focus-within:border-red-500 border border-red-500'
			break
		case 'warning':
			wrapperClassAddition = 'focus-within:border-yellow-500 border border-yellow-500'
			break
		case 'success':
			wrapperClassAddition = 'focus-within:border-green-500 border border-green-500'
			break
	}

	if (showPass) type = 'text'

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e)
	}

	const clearInput = () => {
		const event = {
			target: { value: '' } as EventTarget & HTMLInputElement,
		} as React.ChangeEvent<HTMLInputElement>
		onChange(event)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Escape') {
			clearInput()
		}
	}

	return (
		<>
			<div className={cn(STYLE_INPUT_BORDER, 'relative', wrapperClassAddition, className)} {...props}>
				<div className="flex items-center h-10 px-4 py-2 border rounded">
					{iconName && (
						<Label htmlFor={inputId}>
							<Icon name={iconName} className={cn(ICON_STYLE, 'cursor-text', focusedTextColor)} />
						</Label>
					)}
					<Input
						id={inputId}
						ref={ref}
						type={type}
						placeholder={placeholder}
						value={value}
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
						onFocus={handleFocus}
						onBlur={handleBlur}
						className={cn(
							STYLE_NO_INPUT_BORDER,
							'flex-1 h-full transition-colors duration-200 placeholder-gray-500 focus:placeholder-gray-600',
							inputClassAddition
						)}
					/>
					{(type === 'password' || showPass) && (
						<Icon
							className={cn(ICON_STYLE, 'cursor-pointer', eyeClassAddition)}
							name={showPass ? 'Eye' : 'EyeOff'}
							onClick={() => setShowPass(!showPass)}
						/>
					)}
					{value && (
						<Icon name="XCircle" className={cn(ICON_STYLE, 'cursor-pointer')} onClick={clearInput} />
					)}
				</div>
			</div>
			{messageInfo?.type && (
				<InputMsg type={messageInfo.type} message={messageInfo.message} role="alert" />
			)}
		</>
	)
})

IconInput.displayName = 'IconInput'

export { IconInput }
