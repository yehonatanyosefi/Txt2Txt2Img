import React from 'react'
import { AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
export type InputMsgProps = {
	type: 'error' | 'warning' | 'success' | 'info' | ''
	message: string
}

const InputMsgClasses = {
	error: 'text-red-500',
	warning: 'text-yellow-500',
	success: 'text-green-500',
	info: 'text-blue-500',
	'': '',
}

const InputMsg = React.forwardRef<HTMLDivElement, InputMsgProps & React.ComponentPropsWithoutRef<'div'>>(
	({ type, message, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn('text-sm flex items-center gap-2', InputMsgClasses[type], props.className)}
				{...props}>
				<AlertCircle className="w-4" />
				<p className="text-sm">{message}</p>
			</div>
		)
	}
)

InputMsg.displayName = 'InputMsg'

export { InputMsg }
