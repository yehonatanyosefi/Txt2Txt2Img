import React from 'react'
import { ChatInput } from '@/components/ai/ChatInput'
import { ChatRequestOptions } from 'ai'

interface ChatActionsProps {
	input: string
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleSubmit: (e: React.FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions) => void
	handleStop: () => void
	isLoading: boolean
}

const ChatActions = ({
	input,
	handleInputChange,
	handleSubmit,
	isLoading,
	handleStop,
}: ChatActionsProps) => {
	return (
		<div className="w-full py-2 dark:border-white/20 md:border-transparent md:dark:border-transparent md:w-[calc(100%-.5rem)]">
			<ChatInput
				isLoading={isLoading}
				placeholder="Ask ImageAI..."
				value={input}
				onChange={handleInputChange}
				handleSubmit={handleSubmit}
				handleStop={handleStop}
			/>
			<p className="text-xs text-gray-500 text-center">
				ImageAI can make mistakes. Consider checking important information.
			</p>
		</div>
	)
}

export { ChatActions }
