import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    ignores: ['*.sh', 'node_modules', '.vscode', 'lib', 'public']
  },
  {
    rules: {
      'style/comma-dangle': ['error', 'never'],
      'ts/consistent-type-definitions': ['error', 'type']
    }
  }
)
