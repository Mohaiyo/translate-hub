import { env } from 'node:process'
import alfy from 'alfy'
import OpenAI from 'openai'

export async function doOpenAiTranslate(text: string, target: string) {
  let openai: InstanceType<typeof OpenAI> | null = null

  if (!openai) {
    if (!env.OPENAI_API_KEY) {
      alfy.error('Please set up your openai api key')
      return
    }
    openai = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
    })
  }

  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a helpful assistant designed to output JSON.' },
      {
        role: 'user',
        content: `Translate the text below into the target language with language code ${target}: "${text}", and return the response json format: {detectedLanguage: string; translated: string}`,
      },
    ],
    response_format: { type: 'json_object' },
    model: 'gpt-3.5-turbo-0125',
  })

  return completion
}
