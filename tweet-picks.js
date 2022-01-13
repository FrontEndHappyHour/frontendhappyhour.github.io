// How to leverage the script
// run: node tweet-picks [pass first name or full name of panelist]
// Default will return the latest episode
// If you want to pass an additional parameter of episode number to get a specific episode picks
// run: node tweet-picks [pass first name or full name of panelist] [episode number]

'use strict';
const episodes = require('./content/episodes.json');
const panelInfo = require('./content/panelists.json');
const createUrl = require('./lib/create-url');
const args = process.argv.slice(2);
let personName = args[0];
let episodeNum = args[1];

// allow name parameter to accept lowercase but convert first and last name uppercase first letter
personName = personName.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

// remove any letters from the episode number parameter
episodeNum = episodeNum.replace(/\D/g,'');

function createDetails(num) {
  let epNum;
  let epTitle;
  let fullTitle;
  let desc = '';

  epNum = episodes[num].episode;
  epTitle = episodes[num].title;
  // create link to episode
  const link = 'https://frontendhappyhour.com/episodes/' + createUrl(epTitle);

  // Start of tweet
  desc += `Here are my picks from the latest episode of the Front End Happy Hour podcast @FrontEndHH ${link}\n\n`

  // get pick details
  const picks = episodes[num].picks;
  if(picks.length !== 0) {
    for(let pick in picks) {
        const pickOwner = picks[pick].from;
        // only out put for the panelist from the parameter
        if (pickOwner.includes(personName)){
            desc += picks[pick].title + ' ' + picks[pick].url + `\n`;
        }
    }
  }

  // display final content for the tweet
  console.log(desc);
}

// if an argument has been passed for a specific episode find the episode info
if(episodeNum !== undefined) {
  for(let ep in episodes) {
    // check if the identifer is equal to an episode number or episode title
    if(episodeNum === episodes[ep].episode || episodeNum === episodes[ep].title) {
      createDetails(ep);
    }
  }
// if there wasn't an argument passed find the last episode details
}else{
  createDetails(0);
}