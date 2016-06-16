// Main Template
const ga = require('./ga');
const header = require('./header');
const def = {
  'title': 'Front End Happy Hour',
  'desc': 'Front End Happy Hour, a podcast about everything Front End development.'
};
module.exports = function main(pageType, content, title, desc) {
  'use strict';
  let heading = title;
  let pageContent;
  let pageTitle;
  let path;
  let css;
  const mainTitle = def.title;

  if(desc === undefined || pageType === 'home') {
    desc = def.desc;
  }

  // homepage
  if(pageType === 'home') {
    path = '';
    pageTitle = '';
    pageContent = '<ol reversed>' + content + '</ol>';
    heading = 'Episodes';
    css = 'public/css/style.css';
  }

  // episode page
  if(pageType === 'episode') {
    path = '../../';
    css = 'public/css/episode.css';
    pageContent = content;
    pageTitle = title + ' - ';
  }

  // panelist page
  if(pageType === 'panelist') {
    path = '../../';
    css = 'public/css/panelist.css';
    pageContent = content;
    pageTitle = title + ' - ';
  }

  // mailing list page
  if(pageType === 'mailing') {
    path = '../../';
    css = 'public/css/mailing.css';
    pageContent = content;
    pageTitle = title + ' - ';
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
                   content="http://frontendhappyhour.com/public/img/front-end-happy-hour-logo.png">
                  <link rel="icon" href="http://frontendhappyhour.com/favicon.ico" type="image/x-icon">
                  <link rel="canonical" href="http://frontendhappyhour.com/">
                  <link rel="stylesheet" href="${path}${css}" type="text/css" media="screen">
                  ${ga('UA-74493735-1')}
              </head>
              <body>
                  ${header(path)}
                  <div class="episodes container">
                  <h2>${heading}</h2>
                  ${pageContent}
                  </div>
              </body>
          </html>`;
};