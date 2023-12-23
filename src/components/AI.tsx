'use client'
import React from 'react'
import axios from 'axios'
import { ChatList } from '@/components/ai/ChatList'
import { ChatActions } from '@/components/ai/ChatActions'
import { ChatPlaceholder } from '@/components/ai/ChatPlaceholder'
import { useChat, Message } from 'ai/react'
import ImageWrapper from './ai/ImageWrapper'

async function genImg(prompt: string) {
	const res = await axios.post('/api/image', { prompt })
	if (res.status !== 200) return null
	return res.data.imageUrl
}

const AI = () => {
	const [imageRes, setImageRes] = React.useState(null)
	const [imageLoading, setImageLoading] = React.useState(false)
	const { messages, isLoading, input, handleInputChange, handleSubmit, stop } = useChat({
		onFinish: async (msg) => {
			setImageLoading(true)
			const imageURL = await genImg(msg.content)
			if (!imageURL) return alert('Something went wrong')
			setImageRes(imageURL)
			setImageLoading(false)
		},
	})

	return (
		<div className="bg-orange-50 flex-1 flex flex-col max-h-screen">
			<div className="mx-auto w-[768px] flex-1 flex flex-col max-h-screen pt-14">
				{messages.length === 0 && <ChatPlaceholder />}
				<ChatList messages={messages} />
				<ChatActions
					input={input}
					isLoading={isLoading}
					handleInputChange={handleInputChange}
					handleSubmit={handleSubmit}
					handleStop={stop}
				/>
				{imageLoading && <div className="text-center">Generating Image...</div>}
				{imageRes && <ImageWrapper imageURL={imageRes} />}
			</div>
		</div>
	)
}

export { AI }
export type { Message }
