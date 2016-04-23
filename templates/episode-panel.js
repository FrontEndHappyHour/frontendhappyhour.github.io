// episodePanel
// Episode page panlists
const _ = require('lodash');
const contains = require('../lib/contains');
module.exports = function episodePanel(panelists, panel) {
  'use strict';
  let content = '';
  for(let x = 0; x < panelists.length; x++) {
    if(panel.contains(panelists[x].name)) {
      const name = panelists[x].name;
      const pic = panelists[x].profile_pic;
      const twitter = panelists[x].twitter;
      let pickMarkup;
      if(_.startsWith(pic, 'http') || _.startsWith(pic, '/')) {
        pickMarkup = `<img src="../../public${pic}" alt="${name} profile picture" />`;
      }else {
        pickMarkup = `<img src="https://avatars0.githubusercontent.com/u/${pic}?v=3&s=150" alt="${name} profile picture">`;
      }

      content += `<li>${pickMarkup}
      <span class="name">${name}</span>
      <a href="https://twitter.com/${twitter}" class="twitter">@${twitter}</a>
      </li>`;
    }
  }

  return `<div class="panel">
          <h3>Panel</h3>
          <ul>
          ${content}
          </ul>
          </div>`;
};