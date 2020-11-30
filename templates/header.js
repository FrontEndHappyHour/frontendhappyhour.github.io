// Header
module.exports = function header(path) {
  'use strict';
  const strings = require('../content/strings.json');

  if(path === undefined) {
    path = '';
  }

  const template = `<header>
            <div class="container">
                <a href="/"><h1><img src="${path}public/img/front-end-happy-hour.svg?v2" alt="Front End Happy Hour" class="logo"></h1></a>
                <ul class="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about/">About</a></li>
                    <li><a href="https://front-end-happy-hour.myshopify.com/">Store</a></li>
                    <li><a href="/subscribe/">Subscribe</a></li>
                </ul>
            </div>
        </header>`;

  return template;
};