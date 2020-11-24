base64encode
============

[![npm](https://img.shields.io/npm/v/@wmakeev/base64encode.svg?maxAge=1800&style=flat-square)](https://www.npmjs.com/package/@wmakeev/base64encode)
[![Travis](https://img.shields.io/travis/wmakeev/base64encode.svg?maxAge=1800&style=flat-square)](https://travis-ci.org/wmakeev/base64encode)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

> Base64 encoding for node and browser.

**base64encode** use `btoa` in browser, `Buffer` in node and `Utilities.base64Encode` in [Google Application Script](https://www.google.ru/script/start/) context.

## Install

```
$ npm install @wmakeev/base64encode
```

## Usage

```js
let base64encode = require('@wmakeev/base64encode')

console.log(base64encode('Just a simple string'))
```

## License

[ISC © Vitaliy V. Makeev](../LICENSE)
