'use strict';
const mkdirp = require('mkdirp');
const write = require('../lib/write');
// Templates
const main = require('./main');

// content page
module.exports = function content(page, content, title, desc) {
  // create directory
  mkdirp.sync(`./${page}/`);

  // create index.html for page
  write(`./${page}/index.html`, main(page, `<div class="container">${content}</div>`, title, desc));
};