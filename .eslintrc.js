module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'plugin:import/recommended'],
  plugins: ['prettier', 'import'],
  parser: '@typescript-eslint/parser',

  env: {
    browser: true,
    node: true,
  },

  globals: {
    window: true,
    document: true,
  },

  rules: {
    'no-unused-vars': 1,
    'no-use-before-define': 0,
    'no-shadow': 0,

    'import/prefer-default-export': 0,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
}
