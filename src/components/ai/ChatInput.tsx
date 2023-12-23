'use client'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/Icon'
import { Input } from '@/components/ui/Input'
import { InputMsgProps } from '@/components/ui/advanced/InputMsg'
import React from 'react'
import { STYLE_NO_INPUT_BORDER, STYLE_INPUT_BORDER } from '@/lib/consts'
import { Button } from '../ui/Button'
import { ChatRequestOptions } from 'ai'

type ChatInputProps = {
	placeholder: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	isLoading: boolean
	handleSubmit: (e: React.FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions) => void
	handleStop: () => void
	messageInfo?: InputMsgProps
	className?: string
	inputId?: string
}
const ICON_STYLE = `flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200 ease`
const ChatInput = React.forwardRef<
	HTMLInputElement,
	ChatInputProps & React.ComponentPropsWithoutRef<'div'>
>(
	(
		{
			placeholder,
			value,
			onChange,
			handleSubmit,
			handleStop,
			isLoading,
			messageInfo,
			className,
			inputId,
			...props
		},
		ref
	) => {
		const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			onChange(e)
		}

		return (
			<>
				<div className={cn(STYLE_INPUT_BORDER, 'relative', className)} {...props}>
					<form className="flex items-center h-10 px-4 py-2 border rounded" onSubmit={handleSubmit}>
						<Input
							id={inputId}
							ref={ref}
							type={'text'}
							placeholder={placeholder}
							value={value}
							onChange={handleInputChange}
							className={cn(
								STYLE_NO_INPUT_BORDER,
								'flex-1 h-full transition-colors duration-200 placeholder-gray-500 focus:placeholder-gray-600'
							)}
						/>
						{!isLoading ? (
							<Button
								type="submit"
								className="w-8 h-8 p-0"
								variant={'ghost'}
								disabled={!value.trim() || isLoading}>
								<Icon name="ArrowUp" className={cn(ICON_STYLE, 'cursor-pointer')} />
							</Button>
						) : (
							<Button type="button" onClick={handleStop} className="w-8 h-8 p-0" variant={'ghost'}>
								<Icon name="StopCircle" className={cn(ICON_STYLE)} />
							</Button>
						)}
					</form>
				</div>
			</>
		)
	}
)

ChatInput.displayName = 'ChatInput'

export { ChatInput }
