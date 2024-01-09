// Main Template
const ga = require('./ga');
const header = require('./header');
const footer = require('./footer');
const strings = require('../content/strings.json');

module.exports = function main(pageType, content, title, desc, link, pageOG) {
  'use strict';
  let heading = title;
  let pageContent;
  let pageTitle;
  let urlCanonical = '';
  let path;
  let css;
  let js;
  let classAdd;
  const cssVersion = 2.1;
  const mainTitle = strings.title;

  console.log('pageOG == ' + pageOG);

  // subscribe list HTML
  const subscribeList = `<div class="container">
  <p>${strings.subscribe}</p>
  <url class="subscribe-list">
    <li><a href="${strings.urls[0].spotify}"><img src="../public/img/spotify.svg?v2" alt="Follow our Spotify podcast"><span>Spotify</span></a></li>
    <li><a href="${strings.urls[0].itunes}"><img src="../public/img/podcast.svg?v2" alt="Follow our Apple podcast"><span>Apple</span></a></li>
    <li><a href="${strings.urls[0].googlepodcasts}"><img src="../public/img/googlepodcasts.svg?v2" alt="Follow our Google podcast"><span>Google</span></a></li>
    <li><a href="${strings.urls[0].stitcher}"><img src="../public/img/stitcher.svg?v2" alt="Follow our Stitcher podcast"><span>Stitcher</span></a></li>
    <li><a href="${strings.urls[0].overcast}"><img src="../public/img/overcast.svg?v2" alt="Follow our Overcast podcast"><span>Overcast</span></a></li>
    <li><a href="${strings.urls[0].youtube}"><img src="../public/img/youtube.svg?v2" alt="Subscribe to our YouTube channel"><span>YouTube</span></a></li>
    <li><a href="${strings.urls[0].rss}"><img src="../public/img/rss.svg?v2" alt="Subscribe to our RSS feed"><span>RSS</span></a></li>
  </ul>
</div>`;

  if (desc === undefined || pageType === 'home') {
    desc = strings.desc;
  }

  // set OG image if it's undefined
  if(pageOG === undefined) {
    if (pageType === 'shirts') {
      pageOG = 'https://frontendhappyhour.com/public/img/shirts.jpg';
    } else if (pageType === 'virtual-happy-hour') {
      pageOG = 'https://i.imgur.com/doWONo7.png';
    } else {
      pageOG = 'https://frontendhappyhour.com/public/img/front-end-happy-hour-logo-banner.jpg';
    }
  }

  if (pageType === 'home') {
    classAdd = '';
    path = '';
    pageTitle = '';
    pageContent =
      `
        <div class="home-banner">
          <div class="banner-container">
            <h1>${strings.welcome}</h1>
            <p>${strings.desc}</p>
            <a href="/subscribe" class="sub-btn">Subscribe</a>
          </div>
        </div>
        <h2 class="latest-episodes container">Latest episodes</h2>
        <div id="target">
          <ul>
            <li>
              <div class="placeholder-wrapper">
                <div class="container placeholder-episodes">
                  <span class="episode-number placeholder"></span>
                  <div class="title-area">
                    <div class="title placeholder text-shape"></div>
                    <div class="date placeholder text-shape"></div>
                  </div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder-wrapper">
                <div class="container placeholder-episodes">
                  <span class="episode-number placeholder"></span>
                  <div class="title-area">
                    <div class="title placeholder text-shape"></div>
                    <div class="date placeholder text-shape"></div>
                  </div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder-wrapper">
                <div class="container placeholder-episodes">
                  <span class="episode-number placeholder"></span>
                  <div class="title-area">
                    <div class="title placeholder text-shape"></div>
                    <div class="date placeholder text-shape"></div>
                  </div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      `;
      heading = '';
      css = 'public/css/home.css';
      js = '<script src="public/js/min/home.min.js" type="text/javascript"></script>';
    }
  // homepage and episode list
  if (pageType === 'episodelist') {
    classAdd = '';
    path = '';
    pageTitle = '';
    pageContent =
      `
        <div id="target">
          <ul>
            <li>
              <div class="placeholder-wrapper">
                <div class="container placeholder-episodes">
                  <span class="episode-number placeholder"></span>
                  <div class="title-area">
                    <div class="title placeholder text-shape"></div>
                    <div class="date placeholder text-shape"></div>
                  </div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder-wrapper">
                <div class="container placeholder-episodes">
                  <span class="episode-number placeholder"></span>
                  <div class="title-area">
                    <div class="title placeholder text-shape"></div>
                    <div class="date placeholder text-shape"></div>
                  </div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder-wrapper">
                <div class="container placeholder-episodes">
                  <span class="episode-number placeholder"></span>
                  <div class="title-area">
                    <div class="title placeholder text-shape"></div>
                    <div class="date placeholder text-shape"></div>
                  </div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                  <div class="description placeholder text-shape"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        `;
    heading = 'Episodes';
    css = 'public/css/style.css';
    js = '<script src="public/js/min/home.min.js" type="text/javascript"></script>';
  }

  // episode list page
  if (pageType === 'episodelist') {
    classAdd = '';
    path = '../';
    css = `public/css/style.css?v=${cssVersion}`;
    js = '<script src="../public/js/min/home.min.js" type="text/javascript"></script>';
    urlCanonical = 'episodes';
  }

  // episode page
  if (pageType === 'episode') {
    classAdd = '';
    path = '../../';
    css = `public/css/episode.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    urlCanonical = `episodes/${link}`;
    js = '';
  }

  // subscribe
  if (pageType === 'subscribe') {
    classAdd = 'subscribe';
    path = '../';
    css = `public/css/subscribe.css?v=${cssVersion}`;
    pageContent = subscribeList;
    pageTitle = title + ' - ';
    urlCanonical = `subscribe`;
    js = '';
    heading = 'Subscribe';
  }
  // advertise
  if (pageType === 'advertise') {
    classAdd = 'advertise';
    path = '../';
    css = `public/css/subscribe.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    urlCanonical = `advertise`;
    js = '';
    heading = 'Advertise';
  }

  // about
  if (pageType === 'about') {
    classAdd = 'about';
    path = '../';
    css = `public/css/about.css?v=${cssVersion}`;
    pageContent = `
      <div class="container">${strings.about}</div>
      <div class="container panel">
        <h3>Panelists</h3>
        <ul>
          <li><a href="/panelists/ryan-burgess"><img src="../public/img/panel/burgessdryan.jpg" alt="Ryan Burgess profile picture"></a><a href="https://twitter.com/burgessdryan"><span>Ryan Burgess</span></a></li>
          <li><a href="/panelists/jem-young"><img src="../public/img/panel/JemYoung.jpg" alt="Jem Young profile picture"></a><a href="https://twitter.com/JemYoung"><span>Jem Young</span></a></li>
          <li><a href="/panelists/stacy-london"><img src="../public/img/panel/stacylondoner.jpg" alt="Stacy London profile picture"></a><a href="https://twitter.com/stacylondoner"><span>Stacy London</span></a></li>
          <li><a href="/panelists/augustus-yuan"><img src="../public/img/panel/augburto.jpg" alt="Augustus Yuan profile picture"></a><a href="https://twitter.com/augburto"><span>Augustus Yuan</span></a></li>
          <li><a href="/panelists/mars-jullian"><img src="../public/img/panel/marsjosephine.jpg" alt="Mars Jullian profile picture"></a><a href="https://twitter.com/marsjosephine"><span>Mars Jullian</span></a></li>
          <li><a href="/panelists/shirley-wu"><img src="../public/img/panel/sxywu.jpg" alt="Shirley Wu profile picture"></a><a href="https://twitter.com/sxywu"><span>Shirley Wu</span></a></li>
          <li><a href="/panelists/cole-turner"><img src="../public/img/panel/cole.jpg" alt="Cole Turner profile picture"></a><a href="https://twitter.com/coleturner"><span>Cole Turner</span></a></li>
        </ul>
      </div>
      ${subscribeList}
      <div class="container">
        <h3>Trailer</h3>
        <div class="audio">
          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1386003292&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/front-end-happy-hour" title="Front End Happy Hour" target="_blank" style="color: #cccccc; text-decoration: none;">Front End Happy Hour</a> · <a href="https://soundcloud.com/front-end-happy-hour/front-end-happy-hour-podcast-trailer" title="Front End Happy Hour Podcast Trailer" target="_blank" style="color: #cccccc; text-decoration: none;">Front End Happy Hour Podcast Trailer</a></div>
        </div>
      </div>
    `;
    pageTitle = title + ' - ';
    urlCanonical = `about`;
    js = '';
    heading = 'About';
  }

  // panelist page
  if (pageType === 'panelist') {
    classAdd = 'panelist';
    path = '../../';
    css = `public/css/panelist.css?v=${cssVersion}`;
    pageContent = content;
    urlCanonical = `panelists/${link}`;
    pageTitle = title + ' - ';
    js = '<script src="../../public/js/min/panelist.min.js" type="text/javascript"></script>';
  }

  // mailing list page
  if (pageType === 'mailing') {
    classAdd = 'mailing';
    path = '../';
    css = `public/css/mailing.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '';
  }

  // virtual happy hour page
  if (pageType === 'virtual-happy-hour') {
    classAdd = 'virtual-happy-hour';
    path = '../';
    css = `public/css/virtual-happy-hour.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '';
    heading = '';
  }

  // ama page
  if (pageType === 'ama') {
    classAdd = 'ama';
    path = '../';
    css = `public/css/ama.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '';
    heading = '';
  }

  // legal pages
  if (pageType === 'privacy' || pageType === 'terms') {
    classAdd = 'legal';
    path = '../';
    css = `public/css/legal.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '';
  }

  // guest information page
  if (pageType === 'guests') {
    classAdd = 'legal';
    path = '../';
    css = `public/css/legal.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '';
  }

  // shirts page
  if (pageType === 'shirts') {
    classAdd = 'shirts';
    path = '../';
    css = `public/css/shirts.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '';
  }

  return `<!DOCTYPE html>
          <html>
              <head>
                  <title>${pageTitle}${mainTitle}</title>
                  <meta name="description" content="${desc}">
                  <meta name="viewport" content="width=device-width">
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                  <link rel="alternate" type="application/rss+xml"
                   href="https://feeds.soundcloud.com/users/soundcloud:users:206137365/sounds.rss">
                   <meta property="og:image" content="${pageOG}" /> <meta
                    property="og:description" content="${desc}" />
                    <meta property="og:title" content="${pageTitle}${mainTitle}" />
                    <meta key="twitter:card" name="twitter:description" content="${desc}" />
                    <meta property="twitter:title" content="${pageTitle}${mainTitle}" />
                    <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
                    <meta key="twitter:site" name="twitter:site" content="@frontendhappyhour" />
                    <meta
                      key="twitter:creator"
                      name="twitter:creator"
                      content="@frontendhappyhour"
                    />
                  <link rel="icon" href="https://frontendhappyhour.com/favicon.ico" type="image/x-icon">
                  <link rel="canonical" href="https://frontendhappyhour.com/${urlCanonical}">
                  <link rel="stylesheet" href="${path}${css}" type="text/css" media="screen">
                  ${ga('UA-74493735-1')}
              </head>
              <body>
                  ${header(path)}
                  <div class="episodes ${classAdd}">
                  <h2 id="heading" class="container">${heading}</h2>
                  ${pageContent}
                  </div>
                  ${footer(path)}
                  ${js}
              </body>
          </html>`;
};