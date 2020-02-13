module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  globals: {
    $nuxt: false,
    $: false,
    google: false
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  plugins: [
    'vue',
    'html',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.json', '.vue', '.ts'],
      },
      webpack: {
        config: 'webpack.config.js',
      }
    }
  },
  rules: {
    'max-len': ['error', { code: 150, ignorePattern: '<path'}],
    'no-console': 'off',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
    ],
    'semi': ['error', 'never'],
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'no-shadow': ['error', { 'allow': ['state'] }],
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
  }
}
