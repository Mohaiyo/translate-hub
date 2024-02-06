import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  ignores: [
    '*.sh',
    'node_modules',
    '.vscode',
    'lib/**/*',
    'public',
  ],
})
