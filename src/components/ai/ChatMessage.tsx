import React from 'react'
import { Icon } from '@/components/ui/Icon'
import type { Message } from '@/components/Chat'
import { Logo } from '../ui/advanced/Logo'
interface ChatMessageProps {
	message: Message
}
const CHATBOT_NAME = 'ImageAI'
const ChatMessage = ({ message }: ChatMessageProps) => {
	return (
		<li className="flex flex-col gap-3">
			<div className="flex gap-2">
				{message.role === 'user' ? (
					<Icon name={'User'} className="w-7 h-7 border rounded-full" />
				) : (
					<Logo className="h-8 w-8" />
				)}
				<div>
					<p className="font-semibold">{message.role === 'user' ? 'You' : CHATBOT_NAME}</p>
					<p>{message.content}</p>
				</div>
			</div>
		</li>
	)
}

export { ChatMessage }
