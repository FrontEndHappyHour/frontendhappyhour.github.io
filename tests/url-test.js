'use strict';
const test = require('tape');
const strings = require('../content/strings.json');
const isURL = require('../lib/is-url');

let invalidURLs = [];
//test URLs in strings.json to make sure they are valid URLs
test('Test URLs', function (t) {
  // loop through list of URLs
  for (let key in strings.urls[0]) {
    const url = strings.urls[0][key];
    const urlTest = isURL(url);
    // test to make sure URL is returns true
    t.equal(urlTest, true, `"${url}" is valid`);
    if (!urlTest) {
      // Add Invalid URLs to array for easier debugging
      invalidURLs.push(url);
    }
  }
  if (invalidURLs.length > 0) {
    t.comment('Invalid URLs:');
    t.comment(`"${invalidURLs.join('"\n"')}"`);
  } else {
    t.comment('URLs are all valid');
  }

  t.end();
});
