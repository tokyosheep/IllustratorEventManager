module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    semi: [1, 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  }
};
