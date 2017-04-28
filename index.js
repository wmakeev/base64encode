'use strict'

/* eslint node/no-deprecated-api:0 */

var encode

if (typeof btoa !== 'undefined') {
  // browser
  encode = function (value) { return btoa(value) }
} else if (typeof process !== 'undefined' && process.version) {
  // node
  let nodeVersion = Number(process.version.match(/^v(\d+\.\d+)/)[1])
  encode = nodeVersion < 4.5
    ? function (value) { return new Buffer(value).toString('base64') }
    : function (value) { return Buffer.from(value).toString('base64') }
} else {
  // unknown context
  throw new Error('base64encode: Can\'t determine environment')
}

module.exports = function base64encode (value) {
  return encode(String(value))
}
