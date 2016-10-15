# ESLint testharness.js configuration

This is an eslint configuration for W3C's [testharness.js](https://github.com/w3c/testharness.js)
test runner that is used to run the [web platform tests](https://github.com/w3c/web-platform-tests).

## Usage

```bash
npm install --save-dev eslint-config-testharness
```

Extend your existing eslint configuration and set a new environment:

```json
{
  "env": {
    "eslint-config-testharness/testharness": true
  }
}
```
