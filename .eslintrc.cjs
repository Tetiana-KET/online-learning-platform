/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['dist/', '**/*.config.js', 'tests/**/*.js'],

  rules: {
    'no-case-declarations': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'max-lines': [
      'warn',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'warn',
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-classes-per-file': ['warn', 1],
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
