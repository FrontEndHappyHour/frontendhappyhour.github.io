// episodePicks
// Episode page pick link list
module.exports = function episodePicks(picks) {
  'use strict';
  let picksContent = '';
  for(let i = 0; i < picks.length; i++) {
    picksContent += `<li>
      <a href="${picks[i].url}" target="_blank">${picks[i].title}</a> - ${picks[i].from}
      </li>`;
  }

  return `<div class="picks">
          <h3>Picks</h3>
          <ul>
          ${picksContent}
          </ul>
          </div>`;
};
