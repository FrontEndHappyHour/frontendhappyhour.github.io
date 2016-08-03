'use strict';
const test = require('tape');
const strings = require('../content/strings.json');

function isURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return pattern.test(str);
}

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