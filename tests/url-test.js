'use strict';
const test = require('tape');
const strings = require('../content/strings.json');
const isURL = require('../lib/is-url');

//test URLs in strings.json to make sure they are valid URLs
test('Test URLs', function (t) {
  // loop through list of URLs
  for (let i = 0; i < strings.urls.length; i++) {
    const urlTest = isURL(strings.urls[0].twitter);

    // test to make sure URL is returns true
    t.equal(urlTest, true);
  }

  t.comment('URLs are all valid');

  t.end();
});