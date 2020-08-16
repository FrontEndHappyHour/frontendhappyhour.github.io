// Sub header
module.exports = function header(welcome, desc, path) {
  'use strict';
  const strings = require('../content/strings.json');

  if(path === undefined) {
    path = '';
  }

  const template = `<div class="sub-header">
            <div class="container">
                <h2>${welcome}</h2>
                <p class="desc">${desc}</p>
                <a href="# class="sub-btn">Subscribe</a>
            </div>
        </div>`;

  return template;
};