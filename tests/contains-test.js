'use strict';
const test = require('tape');
const contains = require('../lib/contains');
const arrayStrings = ['hello', 'testing', 'frontend', 'JavaScript'];
const numberArray = [2, 3, 4, 11, 151, 99];

// test to make sure episode number adds pading '00'
test('Test contains function', function (t) {
  t.equal(arrayStrings.contains('hello'), true, 'Array contains the string hello');
  t.equal(arrayStrings.contains('javascript'), false, 'Array contains the string javascript');
  t.equal(arrayStrings.contains('node'), false, 'Array does not contain the string node');
  t.equal(numberArray.contains(151), true, 'Array contains the number 151');
  t.equal(numberArray.contains(33), false, 'Array does not contain the number 33');
  t.comment('Contains is working as expected');

  t.end();
});