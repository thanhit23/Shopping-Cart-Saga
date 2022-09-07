const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: ['react-app', 'airbnb'],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    'prettier/prettier': [2, prettierOptions],
    'arrow-parens': [2, "as-needed"],
    'arrow-body-style': 0,
    "react/prop-types": 0,
    'operator-linebreak': ["error", "after"],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': [0, { allow: 'literal' }],
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/destructuring-assignment': 0
  },
};
