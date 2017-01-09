// panelistPage
// Panelist page content
const _ = require('lodash');
module.exports = function panelistPage(name, bio, twitter, pic) {
  'use strict';

  let pickMarkup = '';
  if(_.startsWith(pic, 'http') || _.startsWith(pic, '/')) {
    pickMarkup = `<img src="../../public${pic}" alt="${name} profile picture" />`;
  }else {
    pickMarkup = `<img src="../../public/img/panel/${twitter}.jpg" alt="${name} profile picture" />`;
  }

  return `${pickMarkup}<div class="content"><p><a href="https://twitter.com/${twitter}">@${twitter}</a></p>
<p>${bio}</p><div id="target"></div></div>`;
};