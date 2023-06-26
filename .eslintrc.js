module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'standard'
  ],
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  env: {
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react-native/no-raw-text': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'operator-linebreak': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'multiline-ternary': 'off'
  }
}
