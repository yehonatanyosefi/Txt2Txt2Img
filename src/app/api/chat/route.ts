import { StreamingTextResponse, LangChainStream, Message } from 'ai'
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { SystemMessage, AIMessage, HumanMessage } from 'langchain/schema'

export const runtime = 'edge'
const systemMessage = new SystemMessage(
	`You are ImageAI. You will generate the description for an ai image, this description will be given to the text generator and be used for making an image. You must give ONLY THE TEXT DESCRIPTION of the image.`
)
export async function POST(req: Request) {
	const { messages } = await req.json()

	const { stream, handlers } = LangChainStream()

	const llm = new ChatOpenAI({
		streaming: true,
	})
	const newMessages = (messages as Message[]).map((m) =>
		m.role == 'user' ? new HumanMessage(m.content) : new AIMessage(m.content)
	)
	newMessages.unshift(systemMessage)

	llm.call(newMessages, {}, [handlers]).catch(console.error)

	return new StreamingTextResponse(stream)
}
