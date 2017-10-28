'use strict';
const test = require('tape');
const strings = require('../content/strings.json');
const isURL = require('../lib/is-url');

let invalidURLs = [];
//test URLs in strings.json to make sure they are valid URLs
test('Test URLs', function (t) {
  // loop through list of URLs
  for (let i = 0; i < strings.urls[0].length; i++) {
    const urlTest = isURL(strings.urls[0][i]);

    // test to make sure URL is returns true
    if (!t.equal(urlTest, true)) {
			// Add Invalid URLs to array for easier debugging
			invalidURLs.push(strings.urls[0][i]);
		}
  }
	if (invalidURLs.length > 0) {
		t.comment('Invalid URLs:');
		t.comment(invalidURLs.join('\n'));
	} else {
		t.comment('URLs are all valid');
	}

  t.end();
});
