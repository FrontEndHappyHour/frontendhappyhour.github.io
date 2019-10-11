'use strict';
const episodes = require('./content/episodes.json');
let soft = 0;
let tech = 0;
let epNum = 0;
let pickNum = 0;
let numGuests = 0;
let linkNum = 0;
let ryanb = 0;
let ryana = 0;
let jem = 0;
let brian = 0;
let derrick = 0;
let augustus = 0;
let mars = 0;
let sarah = 0;
let stacy = 0;

Object.keys(episodes).forEach(function(key) {
  const cat = episodes[key].category;
  const picks = episodes[key].picks;
  const guests = episodes[key].guests;
  const links = episodes[key].links;
  const panelists = episodes[key].panel;
  epNum++;
  if(cat === 'soft') {
    soft++;
  }else{
    tech++;
  }
  numGuests = numGuests + guests.length;
  pickNum = pickNum + picks.length;
  linkNum = linkNum + links.length;

  Object.keys(panelists).forEach(function(key) {
    if(panelists[key] === 'Ryan Burgess') {
      ryanb++;
    }else if(panelists[key] === 'Ryan Anklam') {
      ryana++;
    }else if(panelists[key] === 'Jem Young') {
      jem++;
    }else if(panelists[key] === 'Brian Holt') {
      brian++;
    }else if(panelists[key] === 'Derrick Showers') {
      derrick++;
    }else if(panelists[key] === 'Augustus Yuan') {
      augustus++;
    }else if(panelists[key] === 'Sarah Federman') {
      sarah++;
    }else if(panelists[key] === 'Mars Jullian') {
      mars++;
    }else if(panelists[key] === 'Stacy London') {
      stacy++;
    }
  });
});

const details = {
  'episodes': epNum,
  'technical': tech,
  'soft': soft,
  'picks': pickNum,
  'links': linkNum,
  'guests': numGuests,
  'panel': [
    {
      'name': 'Ryan Burgess',
      'episodes': ryanb
    },
    {
      'name': 'Ryan Anklam',
      'episodes': ryana
    },
    {
      'name': 'Jem Young',
      'episodes': jem
    },
    {
      'name': 'Brian Holt',
      'episodes': brian
    },
    {
      'name': 'Derrick Showers',
      'episodes': derrick
    },
    {
      'name': 'Augustus Yuan',
      'episodes': augustus
    },
    {
      'name': 'Sarah Federman',
      'episodes': sarah
    },
    {
      'name': 'Mars Jullian',
      'episodes': mars
    },
    {
      'name': 'Stacy London',
      'episodes': stacy
    }
  ]
};

console.log(details);