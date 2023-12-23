import { cn } from '@/lib/utils'
import { STYLE_NO_INPUT_BORDER, STYLE_INPUT_BORDER } from '@/lib/consts'
import { Icon } from '@/components/ui/Icon'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { InputMsg, InputMsgProps } from '@/components/ui/advanced/InputMsg'
import React, { useState } from 'react'

const EDGE_ICON = `me-2 w-6 flex items-center cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-200 ease`

type FloatInputProps = {
	type: string
	placeholder: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	showPass?: boolean
	handleToggleShowPass?: () => void
	messageInfo?: InputMsgProps
	className?: string
	inputId?: string
}

const FloatInput = React.forwardRef<
	HTMLInputElement,
	FloatInputProps & React.ComponentPropsWithoutRef<'div'>
>(
	(
		{
			type,
			placeholder,
			value,
			showPass = false,
			handleToggleShowPass,
			onChange,
			messageInfo,
			className,
			inputId,
			...props
		},
		ref
	) => {
		let wrapperClassAddition = ''
		let textColorClass = ''
		switch (messageInfo?.type) {
			case 'error':
				wrapperClassAddition = 'focus-within:border-red-500 border border-red-500'
				textColorClass = 'text-red-500 peer-focus:text-red-500'
				break
			case 'warning':
				wrapperClassAddition = 'focus-within:border-yellow-500 border border-yellow-500'
				textColorClass = 'text-yellow-500 peer-focus:text-yellow-500'
				break
			case 'success':
				wrapperClassAddition = 'focus-within:border-green-500 border border-green-500'
				textColorClass = 'text-green-500 peer-focus:text-green-500'
				break
		}

		if (showPass) type = 'text'

		const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			onChange(e)
		}

		return (
			<div className="flex flex-col gap-2 w-full">
				<div className={cn(STYLE_INPUT_BORDER, 'relative', wrapperClassAddition, className)} {...props}>
					<div className="flex items-center h-10 px-2 py-2">
						<Input
							id={inputId}
							ref={ref}
							type={type}
							placeholder={''}
							value={value}
							onChange={handleInputChange}
							className={cn(STYLE_NO_INPUT_BORDER, 'flex-1 h-full peer transition-colors duration-200')}
						/>
						<Label
							htmlFor={inputId}
							className={cn(
								'absolute top-1/2 left-4 transition-all duration-200 ease px-1 text-gray-500 bg-background pointer-events-none select-none text-xs transform -translate-y-[1.8rem] -translate-x-2 peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:translate-y-center peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:transform peer-focus:-translate-y-[1.8rem] peer-focus:-translate-x-2 peer-focus:text-blue-500',
								textColorClass
							)}>
							{placeholder}
						</Label>
						{(type === 'password' || showPass) && (
							<Icon
								className={cn(EDGE_ICON, textColorClass)}
								name={showPass ? 'EyeOff' : 'Eye'}
								onClick={() => handleToggleShowPass && handleToggleShowPass()}
							/>
						)}
					</div>
				</div>
				{messageInfo?.message && (
					<InputMsg type={messageInfo.type} message={messageInfo.message} role="alert" />
				)}
			</div>
		)
	}
)

FloatInput.displayName = 'FloatInput'

export { FloatInput }
