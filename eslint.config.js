// export { default } from '@importantimport/eslint-config'
import ii from '@importantimport/eslint-config'

export default [
  ...ii,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
    },
  },
]
