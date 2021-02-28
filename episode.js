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

// names of panelists that are no longer part of the regular panel anymore
const oldPanelNames = ['Sarah Federman', 'Brian Holt', 'Derrick Showers', 'Ryan Anklam'];

// create panelist list for new episode
Object.keys(panelists).forEach(function(key) {
  let name = panelists[key].name;
  // get all panelist names except for panelists that aren't on the regular panel anymore
  if(!oldPanelNames.includes(name)) {
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
jsonfile.writeFile('./content/episodes.json', temp, {spaces: 2}, function(err) {
  if(err) {
    console.log(err);
  }else{
    console.log(`Episodes updated with episode ${epNum}`);
  }
});
