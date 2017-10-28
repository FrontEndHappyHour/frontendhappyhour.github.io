'use strict';
const test = require('tape');
const pad = require('../lib/padding');

// test to make sure episode number adds pading '00'
test('Test padding function', function (t) {
  t.equal(pad(1, 3), '001', 'episode 1 is padded with 001');
  t.notEqual(pad(1, 3), '1', 'episode 1 is not equal to 1');

  t.end();
});
