module.exports = {
  extends: [
    'plugin:yml/prettier', // turn off rules that may conflict with prettier.
    'plugin:jsonc/prettier', // turn off rules that may conflict with prettier
    'plugin:prettier/recommended' // last for correct formatting
  ]
}
