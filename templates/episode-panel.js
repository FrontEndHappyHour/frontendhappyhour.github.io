// episodePanel
// Episode page panlists
const _ = require('lodash');
const contains = require('../lib/contains');
module.exports = function episodePanel(panelists, panel) {
  'use strict';
  const fs = require('fs');
  const twitterPic = require('../lib/twitter-pic');
  let content = '';
  for(let x = 0; x < panelists.length; x++) {
    if(panel.contains(panelists[x].name)) {
      const name = panelists[x].name;
      const pic = panelists[x].profile_pic;
      const twitter = panelists[x].twitter;
      const directory = name.replace(' ', '-').toLowerCase();

      // download profile pics if they don't already exist
      fs.stat(`./public/img/panel/${twitter}.jpg`, function(err, stat) {
        if(err !== null) {
          twitterPic(twitter, 'public/img/panel');
        }
      });
      let pickMarkup;
      if(_.startsWith(pic, 'http') || _.startsWith(pic, '/')) {
        pickMarkup = `<img src="../../public${pic}" alt="${name} profile picture" />`;
      }else {
        pickMarkup = `<img src="../../public/img/panel/${twitter}.jpg" alt="${name} profile picture" />`;
      }

      content += `<li><a href="/panelists/${directory}">${pickMarkup}</a>
      <span class="name">${name}</span>
      <a href="https://twitter.com/${twitter}" class="twitter">@${twitter}</a>
      </li>`;
    }
  }

  return `<div class="panel container">
          <h3>Panel</h3>
          <ul>
          ${content}
          </ul>
          </div>
          <div id="target"></div>`;
};