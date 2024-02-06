import alfy from 'alfy'

function apiSeting(val: string) {
  alfy.log(val)
  const [type, configVal] = val.split(',')
  if (type === 'platform')
    alfy.config.set('platform', configVal)
  else if (type === 'target')
    alfy.config.set('target', configVal)

  return val
}
apiSeting(alfy.input)
