const OFF = 0;
const ON = 1;
const ERROR = 2;

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  rules: {
    'consistent-return': OFF,
    'import/no-extraneous-dependencies': OFF,
    // jsx
    'jsx-a11y/html-has-lang': OFF,
    // react
    'react/destructuring-assignment': OFF,
    'react/forbid-prop-types': OFF,
    'react/jsx-filename-extension': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'react/require-default-props': OFF,
    'react/sort-comp': [
      ON,
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          'everything-else',
          'render'
        ]
      }
    ],
    'prettier/prettier': [
      ERROR,
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 80,
        singleQuote: true
      }
    ]
  }
};