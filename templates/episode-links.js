// episodeLinks
// Episode page link list
module.exports = function episodeLinks(links) {
  'use strict';
  let linkContent = '';
  for(let i = 0; i < links.length; i++) {
    linkContent += '<a href="' + links[i].url + '">' + links[i].title + '</a>';
    if(i !== links.length -1) {
      linkContent += ', ';
    }
  }

  return '<div class="links picks">' +
          '<h3>Items mentioned in the episode</h3>' +
          '<p>' + linkContent +
          '</p>' +
          '</div>';
};