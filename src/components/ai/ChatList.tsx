import React from 'react'
import { ChatMessage } from '@/components/ai/ChatMessage'
import type { Message } from '@/components/Chat'

interface ChatListProps {
	messages: Message[]
}
const ChatList = ({ messages }: ChatListProps) => {
	return (
		<ul className="max-h-[768px] flex flex-col gap-3 flex-1 overflow-auto py-5 list-none">
			{messages.map((msg) => (
				<ChatMessage key={msg.id} message={msg} />
			))}
		</ul>
	)
}

export { ChatList }
