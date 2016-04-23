// Main Template
const ga = require('./ga');
const header = require('./header');
const def = {
  'title': 'Front End Happy Hour',
  'desc': 'Front End Happy Hour, a podcast about everything Front End development.',
  'css': 'public/css/style.css'
};
module.exports = function main(content, title, desc, css, path) {
  'use strict';

  if(title === undefined){
    title = def.title;
  }

  if(desc === undefined){
    desc = def.desc;
  }

  if(css === undefined){
    css = def.css;
  }

  if(path === undefined){
    path = '';
  }

  return `<!DOCTYPE html>
          <html>
              <head>
                  <title>${title}</title>
                  <meta name="description" content="${desc}">
                  <meta name="viewport" content="width=device-width">
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                  <link rel="alternate" type="application/rss+xml" href="http://feeds.soundcloud.com/users/soundcloud:users:206137365/sounds.rss">
                  <meta property="og:image" content="http://frontendhappyhour.com/public/img/front-end-happy-hour-logo.png">
                  <link rel="icon" href="favicon.ico" type="image/x-icon">
                  <link rel="canonical" href="http://frontendhappyhour.com/">
                  <link rel="stylesheet" href="${css}" type="text/css" media="screen">
                  ${ga('UA-74493735-1')}
              </head>
              <body>
                  ${header(path)}
                  ${content}
              </body>
          </html>`
};