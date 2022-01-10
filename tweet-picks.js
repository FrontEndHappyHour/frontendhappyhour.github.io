'use strict';
const episodes = require('./content/episodes.json');
const panelInfo = require('./content/panelists.json');
const createUrl = require('./lib/create-url');
const args = process.argv.slice(2);
const episodeNum = args[0];

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
  desc += `Here are my picks from the latest episode of the Front End Happy Hour podcast ${link}\n\n`

  // get pick details
  const picks = episodes[num].picks;
  if(picks.length !== 0) {
    for(let pick in picks) {
        const pickOwner = picks[pick].from;
        if (pickOwner == 'Ryan Burgess'){
            desc += picks[pick].title + ' ' + picks[pick].url + `\n`;
        }
    }
  }

  // display final details
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