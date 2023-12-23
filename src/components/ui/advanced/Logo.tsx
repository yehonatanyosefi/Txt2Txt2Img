import React from 'react'
import { A } from '@/components/ui/A'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
	isLink: boolean
	className?: string
}

const Logo: React.FC<LogoProps> = ({ className, isLink = false }) => {
	if (isLink)
		return (
			<A className={cn('z-40', className)} href={'/'}>
				<Image priority src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
			</A>
		)
	return (
		<Image
			priority
			src="/logo.png"
			alt="Logo"
			width={40}
			height={40}
			className={cn('rounded-full', className)}
		/>
	)
}

export { Logo }
