import { icons as lucideIcons } from 'lucide-react'

type IconProps = {
	name: string
	className?: string
	[propName: string]: any
}

type Icons = {
	[key: string]: React.ComponentType<any>
}

const icons: Icons = lucideIcons

const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
	const LucideIcon = icons[name]

	if (!LucideIcon) {
		return null
	}

	return <LucideIcon className={className} {...props} />
}

export { Icon }
