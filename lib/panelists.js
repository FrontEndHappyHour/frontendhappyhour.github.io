'use strict';
const mkdirp = require('mkdirp');
const panelists = require('../content/panelists.json');
const write = require('./write');
// Templates
const main = require('../templates/main');
const panelistPage = require('../templates/panelist-page');

module.exports = function panelPage() {
  for(const panelist of panelists) {
    const name = panelist.name;
    const twitter = panelist.twitter;
    const bio = panelist.bio;
    const pic = panelist.profile_pic;
    const directory = name.replace(' ', '-').toLowerCase();

    // create a directory for each panelist
    mkdirp.sync(`./panelists/${directory}`);

    let content = '';

    content += panelistPage(name, bio, twitter, pic);

    // create index.html for each episode
    write(`./panelists/${directory}/index.html`, main('panelist', content, name, bio, directory));
  }
};
