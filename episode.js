'use strict';
const episodes = require('./src/content/episodes.json');
const panelists = require('./src/content/panel.json');
const jsonfile = require('jsonfile');
const pad = require('./lib/padding');
const epNum = parseInt(episodes[0].episode) + 1;
const names = [];
const picks = [];
const links = [];
const guests = [];
const temp = [];

// names of panelists that are no longer part of the regular panel anymore
const oldPanelNames = ['Sarah Federman', 'Brian Holt', 'Derrick Showers', 'Ryan Anklam'];

// create panelist list for new episode
Object.keys(panelists).forEach(function(key) {
  let name = panelists[key].name;
  let active = panelists[key].active;
  // get all panelist names except for panelists that aren't on the regular panel anymore
  if(active === true) {
    names.push(name);
    picks.push({'title': '', 'url': '', 'from': name });
    picks.push({'title': '', 'url': '', 'from': name });
  }
});

// build up place holder object for new episode
const object = {
  'episode': pad(epNum, 3),
  'title': '',
  'description': '',
  'id': '',
  'vid': '',
  'published': '',
  'transcribed': false,
  'category': '',
  'tags': [],
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
jsonfile.writeFile('./src/content/episodes.json', temp, {spaces: 2}, function(err) {
  if(err) {
    console.log(err);
  }else{
    console.log(`Episodes updated with episode ${epNum}`);
  }
});
