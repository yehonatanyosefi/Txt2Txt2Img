for pre-processing prompts and using it to generate images, made a quick nextjs project to try it out, feel free to use, let me know if you like it, might make something bigger, it currently uses gpt3.5 for txt, and replicate for image generation

Installation instructions:
1. git clone this directory
2. Add a ".env" file on root directory with those two keys:
OPENAI_API_KEY=YOUR_API_KEY
REPLICATE_API_TOKEN=YOUR_API_KEY
3. Do "npm i" on the root directory, when it finished, you've installed everything

To run it each time write "npm run dev" and you'll see it on localhost:3000


The apis are here: src/app/api/chat and  src/app/api/image
You can edit the prompts on the chat api and api providers on both

