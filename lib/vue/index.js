module.exports = {
  extends: [
    'plugin:vue/vue3-recommended', // vue3
    '../typescript'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'vue/html-self-closing': 'off',
        'vue/no-v-html': 'off'
      }
    }
  ]
}
