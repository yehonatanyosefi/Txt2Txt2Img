import React from 'react'
import { InputMsgProps } from '@/components/ui/advanced/InputMsg'
import { Label } from '@/components/ui/Label'
import { IconInput } from '@/components/ui/advanced/IconInput'
import { cn } from '@/lib/utils'

type LabeledInputProps = {
	label: string
	type: string
	placeholder: string
	errorMessage?: string
	iconName?: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	messageInfo?: InputMsgProps
	className?: string
}

const LabeledInput = React.forwardRef<
	HTMLInputElement,
	LabeledInputProps & React.ComponentPropsWithoutRef<'div'>
>(
	(
		{
			label,
			type,
			placeholder,
			errorMessage,
			iconName,
			value,
			onChange,
			messageInfo,
			className,
			...props
		},
		ref
	) => {
		return (
			<div className={cn('relative flex flex-col w-full gap-2', className)} {...props}>
				<Label htmlFor={label} className="text-base">
					{label}
				</Label>
				<IconInput
					ref={ref}
					type={type}
					placeholder={placeholder}
					iconName={iconName}
					inputId={label}
					className={className}
					onChange={onChange}
					value={value}
					messageInfo={messageInfo}
				/>
			</div>
		)
	}
)

LabeledInput.displayName = 'LabeledInput'
export { LabeledInput }
