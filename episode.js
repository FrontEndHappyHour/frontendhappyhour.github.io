'use strict';
const episodes = require('./content/episodes.json');
const panelists = require('./content/panelists.json');
const jsonfile = require('jsonfile');
const pad = require('./lib/padding');
const epNum = parseInt(episodes[0].episode) + 1;
const names = [];
const picks = [];
const links = [];
const guests = [];
const temp = [];

// create panelist list for new episode
Object.keys(panelists).forEach(function(key) {
  let name = panelists[key].name;
  names.push(name);
  picks.push({'title': '', 'url': '', 'from': name });
});

// build up place holder object for new episode
const object = {
  'episode': pad(epNum, 3),
  'title': '',
  'description': '',
  'id': '',
  'published': '',
  'transcribed': false,
  'panel': names,
  'guests': guests,
  'links': links,
  'picks': picks
};

// add new object and combine with the existing episodes
temp.push(object);

Object.keys(episodes).forEach(function(key) {
  temp.push(episodes[key]);
});

//write new file
jsonfile.writeFile('./content/episodes.json', temp, {spaces: 2}, function(err) {
  if(err) {
    console.log(err);
  }else {
    console.log(`Episodes updated with episode ${epNum}`);
  }
});