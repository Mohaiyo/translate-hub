import alfy from 'alfy'

export function checkStatusCode(statusCode: number, code?: number) {
  let errMsg = ''

  if (statusCode === 101 && code === 10001)
    errMsg = 'The request has timed out.'
  else if (statusCode === 102 && code === 10002)
    errMsg = 'A system error occurred.'
  else if (statusCode === 103 && code === 10003)
    errMsg = 'An error occurred while decoding the URL. Verify that the specified URL is encoded.'
  else if (statusCode === 104 && code === 10004)
    errMsg = 'An error occurred while decoding the URL. Verify that the specified URL is encoded.'
  else if (statusCode === 105 && code === 10005)
    errMsg = 'The specified language pair is not supported.'
  else if (statusCode === 106 && code === 10006)
    errMsg = 'An error occurred while detecting the language.'
  else if (statusCode === 107 && code === 10007)
    errMsg = 'An error occurred while translating.'
  else if (statusCode === 108 && code === 10008)
    errMsg = 'The specified string is too long.'
  else if (statusCode === 109 && code === 10009)
    errMsg = 'The sub-account does not have permission.'
  else if (statusCode === 110 && code === 10010)
    errMsg = 'The account has not been opened for service'
  else if (statusCode === 111 && code === 10011)
    errMsg = 'The sub-account service failed.'
  else if (statusCode === 112 && code === 10012)
    errMsg = 'Translation service call failed'
  else if (statusCode === 113 && code === 10013)
    errMsg = 'Account service not opened or overdue'
  else if (statusCode === 199 && code === 19999)
    errMsg = 'An unknown error occurred.'

  alfy.error(errMsg)
}
