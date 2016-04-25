// episodeList
// List of episodes
module.exports = function episodeList(link, epTitle, epDate, epDesc) {
  'use strict';
  return `<li><a href="episodes/${link}/"><h3>${epTitle}</h3>
          <p>${epDate}</p>
          <p>${epDesc}</p>
          </a></li>`;
};