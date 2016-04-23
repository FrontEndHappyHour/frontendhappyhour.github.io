// episodeGuests
// Episode page guest list
module.exports = function episodeGuests(guests) {
  'use strict';
  let guestList = '';
  for(let i = 0; i < guests.length; i++) {
    guestList += '<li>' +
    '<a href="https://twitter.com/' + guests[i].twitter + '">' + guests[i].name + '</a>' +
    '</li>';
  }

  return `<div class="guests picks">
          <h3>Guests</h3>
          <ul>
          ${guestList}
          </ul>
          </div>`;
};