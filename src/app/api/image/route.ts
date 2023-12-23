export const runtime = 'edge'
import { NextResponse } from 'next/server'
import Replicate from 'replicate'

const replicateApiToken = process.env.REPLICATE_API_TOKEN

if (!replicateApiToken) {
	throw new Error('REPLICATE_API_TOKEN is not defined')
}

const replicate = new Replicate({
	auth: replicateApiToken,
})

export async function POST(req: Request) {
	const { prompt } = await req.json()
	try {
		const outputs = await replicate.run(
			'playgroundai/playground-v2-1024px-aesthetic:42fe626e41cc811eaf02c94b892774839268ce1994ea778eba97103fe1ef51b8',
			{
				input: {
					prompt,
				},
			}
		)

		return NextResponse.json({ imageUrl: outputs[0] })
	} catch (error) {
		console.error(error)
		NextResponse.json({ error: 'An error occurred while processing your request.' })
	}
}
