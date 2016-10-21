// episodeGuests
// Episode page guest list
module.exports = function episodeGuests(guests) {
  'use strict';
  const fs = require('fs');
  const twitterPic = require('../lib/twitter-pic');
  let guestList = '';
  for(let i = 0; i < guests.length; i++) {
    // download profile pics if they don't already exist
    const twitterGuest = guests[i].twitter;
    if(twitterGuest.indexOf('http') === -1) {
      // download Twitter photo
      fs.stat(`./public/img/guests/${twitterGuest}.jpg`, function(err, stat) {
        if(err !== null) {
          twitterPic(twitterGuest, 'public/img/guests');
        }
      });

      let twitterImage = twitterGuest;
      // if twitter name starts with _ than remove _
      if (twitterImage.substring(0, 1) === '_') {
        twitterImage = twitterImage.substring(1);
      }

      guestList += `<li><img src="../../public/img/guests/${twitterImage}.jpg" alt="${guests[i].name} profile picture"><div><a href="https://twitter.com/${twitterGuest}">${guests[i].name}</a></div></li>`;

    }else {
      let phoneName = guests[i].name;
      phoneName = phoneName.replace(/ /g, '-').toLowerCase();
      if (phoneName.substring(0, 1) === '_') {
        phoneName = phoneName.substring(1);
      }
      guestList += `<li><img src="../../public/img/guests/${phoneName}.jpg" alt="${guests[i].name} profile picture"><div><a href="${twitterGuest}">${guests[i].name}</a></div></li>`;
    }
  }

  return `<div class="guests picks">
          <h3>Guests</h3>
          <ul>
          ${guestList}
          </ul>
          </div>`;
};
