module.exports = {
  extends: [
    "eslint:recommended"
  ],
  root: true,
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true,
    es6: true
  },
  globals: require('./index.js').environments.testharness.globals
}
