'use strict';
const mkdirp = require('mkdirp');
const episodes = require('./content/episodes.json');
const panelists = require('./content/panelists.json');
const write = require('./lib/write');
// Templates
const main = require('./templates/main');
const episodeList = require('./templates/episode-list');
const episodePage = require('./templates/episode-page');
const episodeGuests = require('./templates/episode-guests');
const episodeLinks = require('./templates/episode-links');
const episodePicks = require('./templates/episode-picks');
const episodePanel = require('./templates/episode-panel');
let mainOutput = '';

let panel;
episodes.reverse();
for(let i = episodes.length - 1; i >= 0; i--) {
  const epTitle = episodes[i].title;
  panel = episodes[i].panel;
  const epDate = episodes[i].published;
  const epDesc = episodes[i].description;
  const link = epTitle.replace(/ /g, '-').toLowerCase();
  const id = episodes[i].id;
  const picks = episodes[i].picks;
  const links = episodes[i].links;
  const guests = episodes[i].guests;

  // create episode list for homepage
  mainOutput += episodeList(link, epTitle, epDate, epDesc);

  // build episode output
  let episodeOutput = '';

  // add episode content info
  episodeOutput += episodePage(epDate, id, epDesc);

  if(guests.length !== 0) {
    // add episode guests
    episodeOutput += episodeGuests(guests);
  }

  if(links.length !== 0) {
    // add episode links
    episodeOutput += episodeLinks(links);
  }

  // if picks add picks
  if(picks.length !== 0) {
    // add pick links
    episodeOutput += episodePicks(picks);
  }

  // create panel list
  episodeOutput += episodePanel(panelists, panel);

  // create a directory for each episode
  mkdirp.sync(`./episodes/${link}`);

  // create index.html for each episode
  write(`./episodes/${link}/index.html`, main('episode', episodeOutput, epTitle, epDesc));
}

// update index.html
write('index.html', main('home', mainOutput));
