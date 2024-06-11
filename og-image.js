'use strict';
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const episodes = require('./src/content/episodes.json');
const panelists = require('./content/panelists.json');
const write = require('./lib/write');
const createUrl = require('./lib/create-url');
const makeOGImage = require('./lib/make-og-image');

episodes.reverse();

for (let i = episodes.length - 1; i >= 0; i--) {
  const epTitle = episodes[i].title;
  const panel = episodes[i].panel;
  const guests = episodes[i].guests;
  const episodeNum = episodes[i].episode;
  const link = createUrl(epTitle);
  const cardBackground = episodes[i].cardBackground;

  // Create directory for each episode
  mkdirp.sync(`./episodes/${link}`);

  // Find or create episode OG image
  const ogImageName = link + '.jpeg';
  const ogImagePath = path.join('./public/img/episodes/friendly-preview/', ogImageName);
  const existingOGImage = fs.existsSync(ogImagePath);

  if (!existingOGImage) {
    console.log(`OG image not found for episode: ${epTitle}. Creating a new one...`);

    const avatars = [...panel, ...guests]
      .map((person) => {
        const panelist = panelists.find((n) => n.name === person);

        // Get panelist profile images
        if (panelist) {
          const imagePath = `./public/img/panel/${panelist.twitter}.jpg`;
          if (fs.existsSync(imagePath)) {
            return imagePath;
          } else {
            console.warn(`Image not found for panelist: ${panelist.twitter}`);
          }
        }

        // Check if there's a guest twitter profile image
        if (person.twitter) {
          const imagePath = `./public/img/guests/${person.twitter}.jpg`;
          if (fs.existsSync(imagePath)) {
            return imagePath;
          } else {
            console.warn(`Image not found for guest: ${person.twitter}`);
          }
        }

        // If guest doesn't have a twitter, there's always a fallback image in the guest directory that is the guest name in lowercase with a dash between first and last name
        if (!person.twitter) {
          let profileImage = person.name.toLowerCase().replace(/ /g, '-');
          const imagePath = `./public/img/guests/${profileImage}.jpg`;
          if (fs.existsSync(imagePath)) {
            return imagePath;
          } else {
            console.warn(`Fallback image not found for guest: ${profileImage}`);
          }
        }
      })
      .filter((img) => img);

    const allCardBackgrounds = [
      './public/img/card-background/logo-background.png'
    ];

    makeOGImage({
      title: `#${parseInt(episodeNum, 10)}: ${epTitle}`,
      avatars,
      socialIcons: [
        './public/img/spotify.svg',
        './public/img/apple-podcasts.svg',
        './public/img/googlepodcasts.svg',
        './public/img/stitcher.svg',
        './public/img/overcast.svg',
        './public/img/rss.svg'
      ],
      backgrounds: cardBackground ? [cardBackground] : allCardBackgrounds,
      logoURL: './public/img/front-end-happy-hour.svg'
    })
      .then((ogImageJPEG) => {
        write(ogImagePath, ogImageJPEG);
        console.log(`OG image created for episode: ${epTitle}`);
      })
      .catch(console.error);
  } else {
  }
}
