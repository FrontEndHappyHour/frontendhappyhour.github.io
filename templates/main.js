// Main Template
const ga = require('./ga');
const header = require('./header');
const footer = require('./footer');
const strings = require('../content/strings.json');

module.exports = function main(pageType, content, title, desc) {
  'use strict';
  let heading = title;
  let pageContent;
  let pageTitle;
  let pageOG;
  let path;
  let css;
  let js;
  const cssVersion = 1.2;
  const mainTitle = strings.title;

  if (desc === undefined || pageType === 'home') {
    desc = strings.desc;
  }

  // set OG image
  if (pageType === 'shirts') {
    pageOG = 'http://frontendhappyhour.com/public/img/shirts.jpg';
  } else {
    pageOG = 'http://frontendhappyhour.com/public/img/front-end-happy-hour-logo-banner.jpg';
  }

  // homepage
  if (pageType === 'home') {
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

  // episode page
  if (pageType === 'episode') {
    path = '../../';
    css = `public/css/episode.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '';
    //js = '<script src="../../public/js/min/episode.min.js" type="text/javascript"></script>';
  }

  // panelist page
  if (pageType === 'panelist') {
    path = '../../';
    css = `public/css/panelist.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '<script src="../../public/js/min/panelist.min.js" type="text/javascript"></script>';
  }

  // mailing list page
  if (pageType === 'mailing') {
    path = '../';
    css = `public/css/mailing.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '';
  }

  // ama page
  if (pageType === 'virtual-happy-hour') {
    path = '../';
    css = `public/css/virtual-happy-hour.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '';
    heading = '';
  }

  // ama page
  if (pageType === 'ama') {
    path = '../';
    css = `public/css/ama.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '';
    heading = '';
  }

  // legal pages
  if (pageType === 'privacy' || pageType === 'terms') {
    path = '../';
    css = `public/css/legal.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '';
  }

  // shirts page
  if (pageType === 'shirts') {
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
                   href="http://feeds.soundcloud.com/users/soundcloud:users:206137365/sounds.rss">
                  <meta property="og:image"
                   content="${pageOG}">
                  <link rel="icon" href="https://frontendhappyhour.com/favicon.ico" type="image/x-icon">
                  <link rel="canonical" href="http://frontendhappyhour.com/">
                  <link rel="stylesheet" href="${path}${css}" type="text/css" media="screen">
                  ${ga('UA-74493735-1')}
              </head>
              <body>
                  ${header(path)}
                  <div class="episodes">
                  <h2 id="heading" class="container">${heading}</h2>
                  ${pageContent}
                  </div>
                  ${footer(path)}
                  ${js}
              </body>
          </html>`;
};