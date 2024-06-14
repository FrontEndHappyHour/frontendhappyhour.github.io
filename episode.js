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

// Check if 'interview' parameter is passed from command line
const isInterview = process.argv.includes('interview');

if (isInterview) {
  // If 'interview' parameter is passed, only include "Ryan Burgess"
  names.push('Ryan Burgess');
} else {
  // create panelist list for new episode
  Object.keys(panelists).forEach(function(key) {
    let name = panelists[key].name;
    let active = panelists[key].active;
    // get all panelist names except for panelists that aren't on the regular panel anymore
    if (active === true) {
      names.push(name);
      picks.push({ 'title': '', 'url': '', 'from': name });
      picks.push({ 'title': '', 'url': '', 'from': name });
    }
  });
}

// build up place holder object for new episode
const object = {
  'episode': pad(epNum, 3),
  'title': '',
  'description': '',
  'id': '',
  'vid': '',
  'published': '',
  'transcribed': false,
  'category': isInterview ? 'interview' : '',
  'tags': [],
  'panel': names,
  'guests': guests,
  'links': links,
  'picks': isInterview ? [] : picks  // Exclude picks if 'interview' is passed
};

// add new object and combine with the existing episodes
temp.push(object);

Object.keys(episodes).forEach(function(key) {
  temp.push(episodes[key]);
});

// write new file
jsonfile.writeFile('./src/content/episodes.json', temp, { spaces: 2 }, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Episodes updated with episode ${epNum}`);
  }
});
