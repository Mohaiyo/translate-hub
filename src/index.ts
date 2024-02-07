import alfy from 'alfy'
import { doTranslate } from './alimt/index.js'
import { doOpenAiTranslate } from './openai/index.js'
import { checkStatusCode } from './alimt/checkStatus.js'
import { doVolcanoTranslate } from './volcano/index.js'
import { doBaiduTranslate } from './baidu/index.js'

export type PlatformType = 'alimt' | 'azuremt' | 'baidumt' | 'volcenginemt' | 'openai'

const platform: PlatformType = (alfy.config.get('platform') as PlatformType) || 'alimt'
const target: string = (alfy.config.get('target') as string) || 'en'

async function fetchTranslateData() {
  // when plat form is aliyun
  if (platform === 'alimt') {
    const res = await doTranslate({
      targetLanguage: target,
      sourceText: alfy.input,
      sourceLanguage: 'auto'
    })
    if (res) {
      const { body, statusCode } = res
      const { data, code } = body
      if (statusCode === 200 && code === 200) {
        alfy.output([
          {
            title: `Translated from ${data?.detectedLanguage} to ${target} successfully`,
            subtitle: data?.translated ?? '',
            arg: data?.translated,
            text: {
              copy: data?.translated,
              largetype: data?.translated
            }
          }
        ])
      }
      else {
        checkStatusCode(statusCode, code)
      }
    }
  }
  else if (platform === 'openai') {
    const completion = await doOpenAiTranslate(alfy.input, target)
    if (completion) {
      const responseData = completion?.choices[0].message.content && JSON.parse(completion?.choices[0].message.content)
      alfy.output([
        {
          title: `Translated from ${responseData?.detectedLanguage} to ${target} successfully`,
          subtitle: responseData?.translated ?? '',
          arg: responseData?.translated ?? '',
          text: {
            copy: responseData?.translated ?? '',
            largetype: responseData?.translated ?? ''
          }
        }
      ])
    }
  }
  else if (platform === 'volcenginemt') {
    const res = await doVolcanoTranslate(alfy.input, target)
    if (res && res.TranslationList && res.TranslationList.length) {
      const translationList = res.TranslationList
      alfy.output([
        {
          title: `Translated from ${translationList[0]?.DetectedSourceLanguage} to ${target} successfully`,
          subtitle: translationList[0]?.Translation ?? '',
          arg: translationList[0]?.Translation ?? '',
          text: {
            copy: translationList[0]?.Translation ?? '',
            largetype: translationList[0]?.Translation ?? ''
          }
        }
      ])
    }
    else {
      if (res && res.ResponseMetadata.Error) {
        const errMsg = `${res.ResponseMetadata.Error.Code}:${res.ResponseMetadata.Error.Message}`
        alfy.error(errMsg)
      }
    }
  }
  else if (platform === 'baidumt') {
    const res = await doBaiduTranslate(alfy.input, target)
    if (!res.error_code && res.trans_result.length) {
      const translationList = res.trans_result
      alfy.output([
        {
          title: `Translated from ${res.from} to ${res.to} successfully`,
          subtitle: translationList[0]?.dst ?? '',
          arg: translationList[0]?.dst ?? '',
          text: {
            copy: translationList[0]?.dst ?? '',
            largetype: translationList[0]?.dst ?? ''
          }
        }
      ])
    }
    else {
      const errMsg = `${res.error_code}:${res.error_msg}`
      alfy.error(errMsg)
    }
  }
  else {
    alfy.error('Not support yet')
  }
}

if (alfy.input)
  fetchTranslateData()
