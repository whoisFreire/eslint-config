import eslint from '@eslint/js'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import tseslint from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...neostandard({
    ignores: resolveIgnoresFromGitignore(),
  }),
  {
    rules: {
      '@stylistic/max-len': [ 'warn', {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
      } ],
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/space-before-function-paren': [ 'error',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never',
        },
      ],
    },
  }
]
