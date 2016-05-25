// episodeGuests
// Episode page guest list
module.exports = function episodeGuests(guests) {
  'use strict';
  const fs = require('fs');
  const twitterPic = require('../lib/twitter-pic');
  let guestList = '';
  for(let i = 0; i < guests.length; i++) {
    // download profile pics if they don't already exist
    fs.stat(`./public/img/guests/${guests[i].twitter}.jpg`, function(err, stat) {
      if(err !== null) {
        twitterPic(guests[i].twitter, 'public/img/guests');
      }
    });

    guestList += `<li><img src="../../public/img/guests/${guests[i].twitter}.jpg" alt="${guests[i].name} profile picture"><div><a href="https://twitter.com/${guests[i].twitter}">${guests[i].name}</a></div></li>`;
  }

  return `<div class="guests picks">
          <h3>Guests</h3>
          <ul>
          ${guestList}
          </ul>
          </div>`;
};