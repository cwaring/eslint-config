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
    '../typescript', // typescript
    '../vue', // vue 3 with typescript
    '../prettier' // prettier formatting (always last)
  ],
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser'
    }
  ]
}
