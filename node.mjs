import config from './base.mjs'

export default [
  ...config,
  {
    rules: {
      'no-new-require': 'off',
      'no-useless-constructor': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
]