module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard', // standard js style
    'plugin:import/recommended',
    'plugin:jsonc/recommended-with-jsonc', // json, json5 & jsonc
    'plugin:yml/recommended', // yaml formatting
    '../vue', // vue 3 with typescript
    '../prettier' // prettier formatting (always last)
  ],
  rules: {
    'import/first': 'error', // ensure all imports appear before other statements
    'import/order': 'error', // enforce a convention in module import order
    'import/no-mutable-exports': 'error', // forbid the use of mutable exports with var or let
    'import/no-absolute-path': 'off', // forbid import of modules using absolute paths
    'import/no-unresolved': 'off' // ensure imports point to a file/module that can be resolved
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser'
    }
  ]
}
