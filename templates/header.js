// Header
module.exports = function header(path) {
  'use strict';
  const strings = require('../content/strings.json');

  if(path === undefined) {
    path = '';
  }

  const template = `<header>
            <div class="container">
                <a href="/"><h1><img src="${path}public/img/front-end-happy-hour.svg" alt="Front End Happy Hour" class="logo"></h1></a>
                <div class="bottom">
                    <ul class="feeds">
                        <li><a href="${strings.urls[0].spotify}"><img src="${path}public/img/spotify.svg" alt="Follow our Spotify podcast"></a></li>
                        <li><a href="${strings.urls[0].itunes}"><img src="${path}public/img/podcast.svg" alt="Subscribe to iTunes Podcast"></a></li>
                        <li><a href="${strings.urls[0].googlepodcasts}"><img src="${path}public/img/googlepodcasts.svg" alt="Follow us on Google Podcasts"></a></li>
                        <li><a href="${strings.urls[0].rss}"><img src="${path}public/img/rss.svg" alt="Subscribe to RSS feed"></a></li>
                        <li><a href="${strings.urls[0].twitter}"><img src="${path}public/img/twitter.svg" alt="Follow us on Twitter"></a></li>
                    </ul>
                </div>
            </div>
        </header>`;

  return template;
};