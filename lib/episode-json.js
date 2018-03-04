// Episode JSON
// Create a slimmed down version of episode JSON
const fs = require('fs');
const episodes = require('../content/episodes.json');
const obj = [];
module.exports = function epJSON() {
  'use strict';
  // loop through the episode list and construct a new object
  for (let ep in episodes) {
    const episode = episodes[ep].episode;
    const title = episodes[ep].title;
    const description = episodes[ep].description;
    const published = episodes[ep].published;
    
    if (episode !== undefined) {
      // only use keys from the original JSON needed
      const details = {
        episode: episode,
        title: title,
        description: description,
        published: published
      }

      // add details to object
      obj.push(details);
    }
  }

   // create episode-list JSON file
  fs.writeFile('./content/episode-list.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
  });
};