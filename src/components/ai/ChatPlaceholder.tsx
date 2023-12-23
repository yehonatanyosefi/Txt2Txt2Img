import React from 'react'
import { Logo } from '@/components/ui/advanced/Logo'

function ChatPlaceholder() {
	return (
		<div className="flex-1 flex items-center justify-center flex-col gap-3">
			<Logo />
			<p className="text-center text-3xl">How can I help you today?</p>
		</div>
	)
}

export { ChatPlaceholder }
