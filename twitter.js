'use strict';
const episodes = require('./content/episodes.json');
const panelInfo = require('./content/panelists.json');
const args = process.argv.slice(2);
const identifier = args[0];

function createDetails(num) {
  let epNum;
  let epTitle;
  let tweetCopy;
  let desc = '';

  epNum = episodes[num].episode;
  epTitle = episodes[num].title;

  tweetCopy = `Here are the picks from our latest episode:`;

  // get pick details
  const picks = episodes[num].picks;
  if(picks.length !== 0) {
    //add heading for guests
    for(let pick in picks) {
      //desc += picks[pick].from + ' - ' + picks[pick].title + picks[pick].url + ' ' + `\n`;
      desc += picks[pick].url + `\n\n`;
    }
  }

  // display final details
  console.log(`\n${tweetCopy}\n\n${desc}\n`);
}

// if an argument has been passed for a specific episode find the episode info
if(identifier !== undefined) {
  for(let ep in episodes) {
    // check if the identifer is equal to an episode number or episode title
    if(identifier === episodes[ep].episode || identifier === episodes[ep].title) {
      createDetails(ep);
    }
  }
// if there wasn't an argument passed find the last episode details
}else{
  createDetails(0);
}