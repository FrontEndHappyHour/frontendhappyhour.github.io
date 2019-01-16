'use strict';
const test = require('tape');
const episodes = require('../content/episodes.json');
const isURL = require('../lib/is-url');

// test URLs in strings.json to make sure they are valid URLs
// URLs can be blank because sometimes guests do not pick something on the internet
test('Test URLs', function (t) {
  const invalidPicks = [];
  const invalidLinks = [];
  // loop through list of URLs
  for (let i = 0; i < episodes.length; i++) {
    const picks = episodes[i].picks;
    const links = episodes[i].links;

    for (const pick of picks) {
      const pickUrlTest = isURL(pick.url) || pick.url === '';
      t.equal(pickUrlTest, true, `"${pick.url}" is valid`);

      // Add Invalid URLs to array for easier debugging
      if (!pickUrlTest) {
        invalidPicks.push(JSON.stringify(pick));
      }
    }

    for (const link of links) {
      const linkUrlTest = isURL(link.url) || link.url === '';
      t.equal(linkUrlTest, true, `"${link.url}" is valid`);

      // Add Invalid URLs to array for easier debugging
      if (!linkUrlTest) {
        invalidLinks.push(JSON.stringify(link));
      }
    }
  }

  if (invalidPicks.length > 0) {
    t.comment('Invalid Pick URLs:');
    t.comment(`"${invalidPicks.join('"\n"')}"`);
  }
  if (invalidLinks.length > 0) {
    t.comment('Invalid Link URLs:');
    t.comment(`"${invalidLinks.join('"\n"')}"`);
  }
  if (invalidPicks.length === 0 && invalidLinks.length === 0) {
    t.comment('All Picks and Links all valid');
  }

  t.end();
});
