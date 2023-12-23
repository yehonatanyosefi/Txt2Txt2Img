import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { Icon } from '../Icon'
import { cn } from '@/lib/utils'

interface User {
	imageUrl?: string
	name: string
}

interface UserAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	user: User
	size?: number
	className?: string
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user, size = 40, className, ...props }) => {
	const { imageUrl, name } = user
	const generateInitials = (name: string) => {
		return name
			.split(' ')
			.filter((n) => n !== '')
			.map((n) => n[0])
			.join('')
			.toUpperCase()
	}

	return (
		<Avatar
			className={cn('relative w-8 h-8', className)}
			style={{ width: `${size}px`, height: `${size}px` }}>
			<div className={cn('relative aspect-square h-full w-full')} {...props}>
				<AvatarImage src={imageUrl} alt="profile picture" referrerPolicy="no-referrer" />
			</div>
			<AvatarFallback>
				{name ? (
					<>
						<span className="sr-only">{name}</span>
						<span className={cn('relative aspect-square h-full w-full text-zinc-900')} {...props}>
							{generateInitials(name)}
						</span>
					</>
				) : (
					<Icon name="user" className={cn('h-full w-full')} {...props} />
				)}
			</AvatarFallback>
		</Avatar>
	)
}

export { UserAvatar }
