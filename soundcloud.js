'use strict';
const episodes = require('./content/episodes.json');
const panelInfo = require('./content/panelists.json');
const args = process.argv.slice(2);
const identifier = args[0];

function createDetails(num) {
  let epNum;
  let epTitle;
  let fullTitle;
  let desc = '';

  epNum = episodes[num].episode;
  epTitle = episodes[num].title;

  fullTitle = `Episode ${epNum} - ${epTitle}`;

  // desctription details
  const epDesc = episodes[num].description;
  desc += `${epDesc}\n`;

  // links of items mentioned in the episode
  const links = episodes[num].links;
  //if there are links get the items
  if (links.length !== 0) {
    //add heading for items
    desc += `\nItems mentioned in the episode:\n`;
    for (let link in links) {
      desc += links[link].title;

      // add comma
      if (parseInt(link) + 1 !== links.length) {
        desc += ', ';
      }else {
        desc += '\n';
      }
    }
  }

  const guests = episodes[num].guests;
  //if there are guests get the names and twitter
  if (guests.length !== 0) {
    //add heading for guests
    desc += `\nGuests:\n`;
    for (let guest in guests) {
      desc += guests[guest].name;
      // check to see if they have a twitter
      if (guests[guest].twitter !== '') {
        desc += ' - @' + guests[guest].twitter + `\n`;
      }else {
        desc += `\n`;
      }
    }
  }

  // get panelist details
  const panelists = episodes[num].panel;
  desc += `\nPanelists:\n`;
  for (let panelist in panelists) {
    desc += panelists[panelist];

    // find panelist twitter
    for (let p in panelInfo) {
      if (panelInfo[p].name === panelists[panelist]) {
        desc += ` - @${panelInfo[p].twitter}\n`;
      }
    }
  }

  // get pick details
  const picks = episodes[num].picks;
  if (picks.length !== 0) {
    //add heading for guests
    desc += `\nPicks:\n`;
    for (let pick in picks) {
      desc += picks[pick].from + ' - ' + picks[pick].title + `\n`;
    }
  }

  // display final details
  console.log(`\n${fullTitle}\n\n${desc}\n`);
}

// if an argument has been passed for a specific episode find the episode info
if (identifier !== undefined) {
  for (let ep in episodes) {
    // check if the identifer is equal to an episode number or episode title
    if (identifier === episodes[ep].episode || identifier === episodes[ep].title) {
      createDetails(ep);
    }
  }
// if there wasn't an argument passed find the last episode details
} else {
  createDetails(0);
}