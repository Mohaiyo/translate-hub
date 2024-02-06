import { env } from 'node:process'
import Client, { TranslateGeneralRequest } from '@alicloud/alimt20181012'
import * as $OpenApi from '@alicloud/openapi-client'
import * as $Util from '@alicloud/tea-util'
import alfy from 'alfy'
let client
/**
 * use AK&SK create Client
 * @param accessKeyId
 * @param accessKeySecret
 * @return Client
 * @throws Exception
 */
function createClient(accessKeyId, accessKeySecret) {
  const config = new $OpenApi.Config({
    // required, your AccessKey ID
    accessKeyId,
    // required, your AccessKey Secret
    accessKeySecret
  })
  // Endpoint please reference https://api.aliyun.com/product/alimt
  config.endpoint = `mt.aliyuncs.com`
  const ClientDefault = Client.default
  return new ClientDefault(config)
}
export async function doTranslate(params) {
  if (!client) {
    if (!env.ALIBABA_CLOUD_ACCESS_KEY_ID || !env.ALIBABA_CLOUD_ACCESS_KEY_SECRET) {
      alfy.log('Please set up your access key id and access key secret')
      return
    }
    // Please ensure that the environment variable is set for the code running environment ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET。
    // Engineering code leakage may lead to AccessKey leakage and threaten the security of all resources under the account. The following code example uses the environment variable to obtain the AccessKey. It is for reference only. It is recommended to use the more secure STS method. For more authentication access methods, see：https://help.aliyun.com/document_detail/378664.html
    client = createClient(env.ALIBABA_CLOUD_ACCESS_KEY_ID, env.ALIBABA_CLOUD_ACCESS_KEY_SECRET)
  }
  const translateGeneralRequest = new TranslateGeneralRequest({})
  translateGeneralRequest.formatType = 'text'
  translateGeneralRequest.sourceLanguage = params.sourceLanguage || 'auto'
  translateGeneralRequest.targetLanguage = params.targetLanguage
  translateGeneralRequest.sourceText = params.sourceText
  translateGeneralRequest.scene = 'general'
  const runtime = new $Util.RuntimeOptions({})
  try {
    const res = await client?.translateGeneralWithOptions(translateGeneralRequest, runtime)
    return res
  } catch (error) {
    // error message
    console.error(error.message)
    // Diagnostic Address
    console.error(error.data.Recommend)
  }
}
