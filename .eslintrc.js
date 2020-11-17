// https://eslint.org/docs/rules/
module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  globals: { window: true },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-eval': 0,
    'no-unused-expressions': 0,
    'no-new': 0,
    'no-sparse-arrays': 0,
    'handle-callback-err': 0,
    'standard/no-callback-literal': 0,
    'space-before-function-paren': 0
  }
}
