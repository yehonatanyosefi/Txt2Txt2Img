import React, { useRef } from 'react'
import Image from 'next/image'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'

interface ImageWrapperProps {
	imageURL: string
}

export default function ImageWrapper({ imageURL }: ImageWrapperProps) {
	const handleDownload = async () => {
		const response = await fetch(imageURL)
		const blob = await response.blob()
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a')
		link.href = url
		link.download = 'image.jpg'
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	return (
		<div className="flex flex-col items-center justify-center rounded-sm w-full relative">
			<Image width={500} height={500} src={imageURL} alt="image" className="max-w-[500px]" />
			<Button
				type="button"
				variant={'default'}
				onClick={handleDownload}
				className="mt-2 absolute top-0 left-0 p-2">
				<Icon name="Download" />
			</Button>
		</div>
	)
}
