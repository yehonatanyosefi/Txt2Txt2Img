import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/Button'
import { type VariantProps } from 'class-variance-authority'

interface AProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof buttonVariants> {
	href: string
	children: React.ReactNode
	className?: string
}

const A: React.FC<AProps> = ({ href, variant, size, children, className, ...props }) => {
	const baseStyle = variant
		? buttonVariants({ variant, size })
		: 'h-fit text-sm text-primary font-bold hover:text-orange-800'

	return (
		<Link href={href} className={cn(baseStyle, className)} {...props}>
			{children}
		</Link>
	)
}

export { A }
