'use strict';
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const episodes = require('./content/episodes.json');
const panelists = require('./content/panelists.json');
const write = require('./lib/write');
const createUrl = require('./lib/create-url');
const ellipsize = require('ellipsize');
const mailing = require('./lib/mailing');
const panelistPage = require('./lib/panelists');
const createSiteMap = require('./lib/sitemap');
const makeOGImage = require('./lib/make-og-image');

// Templates
const main = require('./templates/main');
const episodeList = require('./templates/episode-list');
const episodePage = require('./templates/episode-page');
const episodeGuests = require('./templates/episode-guests');
const episodeLinks = require('./templates/episode-links');
const episodePicks = require('./templates/episode-picks');
const episodePanel = require('./templates/episode-panel');
const shirtPage = require('./templates/shirts-page');
const contentPage = require('./templates/content-page');

// content
const privacyContent = require('./content/privacy');
const termsContent = require('./content/terms');
const amaContent = require('./content/ama');
const virtualHappyHourContent = require('./content/virtual-happy-hour');
const guestInfoContent = require('./content/guests');
const advertiseContent = require('./content/advertise');

// store the output of HTML markup
let mainOutput = '';

let panel;
episodes.reverse();
for (let i = episodes.length - 1; i >= 0; i--) {
  const epTitle = episodes[i].title;
  panel = episodes[i].panel;
  const epDate = episodes[i].published;
  const epDesc = episodes[i].description;
  const link = createUrl(epTitle);
  const id = episodes[i].id;
  const vidID = episodes[i].vid;
  const picks = episodes[i].picks;
  const links = episodes[i].links;
  const guests = episodes[i].guests;
  const shortDesc = ellipsize(epDesc, 240);
  const transcript = episodes[i].transcribed;
  const episodeNum = episodes[i].episode;
  const cardBackground = episodes[i].cardBackground;

  // create episode list for homepage
  mainOutput += episodeList(link, epTitle, epDate, shortDesc);

  // build episode output
  let episodeOutput = '';

  // add episode content info
  episodeOutput += episodePage(epDate, id, vidID, epDesc);

  // if a guest exists add heading and guest info
  if (guests.length !== 0) {
    // add episode guests
    episodeOutput += episodeGuests(guests);
  }

  // if there are episode links available add them to the page with a links heading
  if (links.length !== 0) {
    // add episode links
    episodeOutput += episodeLinks(links);
  }

  // if there are picks for the episode add picks section
  if (picks.length !== 0) {
    // add pick links
    episodeOutput += episodePicks(picks);
  }

  // create panel list
  episodeOutput += episodePanel(panelists, panel);

  // transcript
  if (transcript === true) {
    const transcriptContent = require('./transcripts/' + episodeNum)();
    episodeOutput += '<div class="transcript container"><h3>Episode transcript</h3>';
    episodeOutput += `<a href="https://github.com/FrontEndHappyHour/frontendhappyhour.github.io/blob/main/transcripts/${episodeNum}.js" class="transcript-edit-link container">Edit transcript</a>`;
    episodeOutput += transcriptContent;
    episodeOutput += '</div>';
  }

  // create a directory for each episode
  mkdirp.sync(`./episodes/${link}`);

  // find or create episode OG image
  const ogImageName = link + '.jpeg';
  const pageOGImage =
    'https://frontendhappyhour.com/public/img/episodes/friendly-preview/' +
    ogImageName;
  const ogImagePath = path.join(
    './public/img/episodes/friendly-preview/',
    ogImageName
  );
  const existingOGImage = fs.existsSync(ogImagePath);

  if(!existingOGImage) {
    const avatars = [...panel, ...guests]
      .map((person) => {
        const panelist = panelists.find((n) => n.name === person);

        // get panelist profile images
        if(panelist) {
          return `./public/img/panel/${panelist.twitter}.jpg`;
        }

        // check if there's a guest twitter profile image
        if(person.twitter) {
          return `./public/img/guests/${person.twitter}.jpg`;
        }

        // if guest doesn't have a twitter, there's always a fallback image in the guest directory that is the guest name in lowercase with a dash between first and last name.
        if(person.twitter === '') {
          let profileImage = person.name.toLowerCase();
          profileImage = profileImage.replace(' ', '-');
          return `./public/img/guests/${profileImage}.jpg`;
        }
      })
      .filter((img) => {
        return fs.existsSync(img);
      });

    const allCardBackgrounds = [
      './public/img/card-background/logo-background.png'
    ];

    makeOGImage({
      title: '#' + parseInt(episodeNum, 10) + ': ' + epTitle,
      avatars,
      socialIcons: [
        './public/img/spotify.svg',
        './public/img/podcast.svg',
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
      })
      .catch(console.error);
  }

  // create index.html for each episode
  write(
    `./episodes/${link}/index.html`,
    main('episode', episodeOutput, epTitle, epDesc, link, pageOGImage)
  );
}

// update index.html
// this updates the content for the homepage
write('index.html', main('home', mainOutput));

// update episodes list
// this updates the content for the episodes list page
write('./episodes/index.html', main('episodelist', mainOutput));

// update subscribe page
contentPage('subscribe', '', 'Subscribe');

// update about page
contentPage('about', '', 'About');

// update guest info page
contentPage('guests', guestInfoContent, 'Guests');

// update advertise info page
contentPage('advertise', advertiseContent, 'Advertise');

// create mailing list page
mailing();

// create panelist pages
panelistPage();

// create ama page
const AmaTitle = 'AMA';
const AmaDesc = 'We\'d love to answer questions from our listeners. Leave us a message with your questions and we\'ll answer them in a future episode.';
contentPage('ama', amaContent, AmaTitle, AmaDesc);

// create Virtual Happy Hour page
const VHHTitle = 'Virtual Happy Hour';
const VHHDesc = 'We\;ll be doing our first ever Virtual Happy Hour live! Join us at twitch.tv/frontendhappyhour';
contentPage('virtual-happy-hour', virtualHappyHourContent, VHHTitle, VHHDesc);

//create privacy page
contentPage('privacy', privacyContent, 'Privacy Policy');

//create terms page
contentPage('terms', termsContent, 'Terms of Use');

//create shirt page
shirtPage('shirts', 'T-Shirts', 'Purchase Front End Happy Hour t-shirts and clothing.');

// create sitemap
createSiteMap();