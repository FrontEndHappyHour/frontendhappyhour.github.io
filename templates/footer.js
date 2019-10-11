// Header
module.exports = function footer(path) {
  'use strict';
  const strings = require('../content/strings.json');

  if(path === undefined) {
    path = '';
  }
  const svgHeart = '<svg class="heart"><use xlink:href="#heart"></use></svg>';
  const template = `<footer>
      <svg style="display: none;">
        <symbol id="heart" viewBox="0 0 32 29.6">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </symbol>
      </svg>
      <div class="row">${strings.footer.replace('_LOVE_', svgHeart)}</div>
      <ul class="legal">
        <li><a href="/terms">Terms</a></li>
        <li><a href="/privacy">Privacy</a></li>
      </ul>
  </footer>`;

  return template;
};