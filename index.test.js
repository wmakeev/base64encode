'use strict'

var test = require('tape')
var base64encode = require('./index')

test('base64encode', function (t) {
  t.ok(base64encode, 'should to be ok')
  t.equal(
    base64encode('test string'),
    'dGVzdCBzdHJpbmc=',
    'should encode string'
  )
  t.end()
})
