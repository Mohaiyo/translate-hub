import { env } from 'node:process'
import { Service } from '@volcengine/openapi'
import alfy from 'alfy'

export type VolcanoTranslateResData = {
  TranslationList: [
    {
      Translation: string
      DetectedSourceLanguage: string
    }
  ]
  ResponseMetadata: {
    RequestId: string
    Action: 'TranslateText'
    Version: string
    Service: 'translate'
    Region: 'cn-north-1'
    Error: {
      Code: string
      Message: string
    } | null
  }
}
export async function doVolcanoTranslate(text: string, target: string): Promise<VolcanoTranslateResData> {
  const accessKeyId = env.VOCAENGINE_ACCESS_KEY_ID
  const secretKey = env.VOCAENGINE_ACCESS_KEY_SECRET
  if (!accessKeyId || !secretKey)
    alfy.error('Please set up volcano translation access key id and secret')

  const postBody = {
    TargetLanguage: target,
    TextList: [text]
  }

  const service = new Service({
    host: 'open.volcengineapi.com',
    serviceName: 'translate',
    region: 'cn-north-1',
    accessKeyId,
    secretKey
  })

  const fetchApi = service.createAPI<Record<string, any>, VolcanoTranslateResData>('TranslateText', {
    Version: '2020-06-01',
    method: 'POST',
    contentType: 'json'
  })

  const res = await fetchApi(postBody)
  return res as unknown as Promise<VolcanoTranslateResData>
}
