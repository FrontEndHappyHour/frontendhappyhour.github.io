'use strict';
const mkdirp = require('mkdirp');
const write = require('./write');
// Templates
const main = require('../templates/main');
const mailing = require('../templates/mailing-list');

module.exports = function mailingList() {
  const content = mailing('Join our mailing list');
  //meta data
  const title = 'Mailing list';
  const desc = 'Join the Front End Happy Hour for episode releases and exclusive updates.';
  // create a directory for each episode
  mkdirp.sync('./mailing-list/');

  // create index.html for each episode
  write('./mailing-list/index.html', main('mailing', content, title, desc));
};
