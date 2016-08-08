'use strict';
const test = require('tape');
const episodes = require('../content/episodes.json');
const isURL = require('../lib/is-url');

//test URLs in strings.json to make sure they are valid URLs
test('Test URLs', function (t) {
  // loop through list of URLs
  for (let i = 0; i < episodes.length; i++) {
      const picks = episodes[i].picks;
      const links = episodes[i].links;

      for (const pick of picks) {
        const pickUrlTest = isURL(pick.url);
        t.equal(pickUrlTest, true, `${pick.url} = PASSED`);
      }

      for (const link of links) {
        const linkUrlTest = isURL(link.url);
        t.equal(linkUrlTest, true, `${link.url} = PASSED`);
      }
    }
  t.comment('URLs are all valid');

  t.end();
});