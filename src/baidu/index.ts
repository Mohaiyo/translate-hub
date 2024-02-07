import { env } from 'node:process'
import crypto from 'node:crypto'
import alfy from 'alfy'

export type BaiduTranslateResData = {
  from: string
  to: string
  trans_result: { src: string, dst: string }[]
  error_code?: string | null
  error_msg?: string | null
}
export async function doBaiduTranslate(text: string, target: string) {
  const appId = env.BAIDU_APP_ID
  const appSecret = env.BAIDU_APP_SECRET

  if (!appId || !appSecret)
    alfy.error('Please set up app id and app secret')

  const salt = Math.random()
  const sign = crypto
    .createHash('md5')
    .update(appId + text + salt + appSecret)
    .digest('hex')
  return await fetch(
    `http://api.fanyi.baidu.com/api/trans/vip/translate?q=${text}&from=auto&to=${target}&appid=${appId}&salt=${salt}&sign=${sign}`,
    {
      method: 'GET'
    }
  ).then<BaiduTranslateResData>((res) => {
    return res.json()
  })
}
