import type { Metadata } from 'next'
import '@/app/globals.css'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/Toaster'

export const metadata: Metadata = {
	title: 'ImageAI',
	description: 'Made by Yehonatan Yosefi',
}

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head></head>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased flex flex-col',
					fontSans.variable
				)}>
				<main className="flex-1 flex flex-col min-h-[calc(100vh-56px)]">{children}</main>
				<Toaster />
			</body>
		</html>
	)
}
