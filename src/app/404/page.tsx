'use client'
import { A } from '@/components/ui/A'

export default function Home() {
	return (
		<div className="max-w-screen mx-auto px-4 flex items-start justify-center py-24 h-screen md:px-8">
			<div className="max-w-lg mx-auto space-y-3 text-center">
				<h3 className="text-primary font-semibold">404 Error</h3>
				<p className="text-gray-800 text-4xl font-semibold sm:text-5xl">Page not found</p>
				<p className="text-gray-600">
					Sorry, the page you are looking for could not be found or has been removed.
				</p>
				<div className="flex flex-wrap items-center justify-center gap-3">
					<A href={'/'}>Back to homepage</A>
				</div>
			</div>
		</div>
	)
}
