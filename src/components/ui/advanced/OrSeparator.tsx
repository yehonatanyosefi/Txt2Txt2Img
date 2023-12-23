import React from 'react'
import { Separator } from '@/components/ui/Separator'

const ORSeparator: React.FC = () => {
	return (
		<div className="flex items-center w-full">
			<Separator className="flex-1" />
			<span className="text-xs px-4">OR</span>
			<Separator className="flex-1" />
		</div>
	)
}

export { ORSeparator }
