'use strict';
const test = require('tape');
const main = require('../templates/main');
const strings = require('../content/strings.json');
const expected = `<!DOCTYPE html>
          <html>
              <head>
                  <title>${strings[0].title}</title>
                  <meta name="description" content="${strings[0].desc}">
                  <meta name="viewport" content="width=device-width">
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                  <link rel="alternate" type="application/rss+xml"
                   href="http://feeds.soundcloud.com/users/soundcloud:users:206137365/sounds.rss">
                  <meta property="og:image"
                   content="http://frontendhappyhour.com/public/img/front-end-happy-hour-logo.png">
                  <link rel="icon" href="http://frontendhappyhour.com/favicon.ico" type="image/x-icon">
                  <link rel="canonical" href="http://frontendhappyhour.com/">
                  <link rel="stylesheet" href="public/css/style.css" type="text/css" media="screen">
                  <script>
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
                    ga('create', 'UA-74493735-1', 'auto');
                    ga('send', 'pageview');
                  </script>
              </head>
              <body>
                  <header>
            <div class="container">
                <a href="/" class="logo">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 400 240" style="enable-background:new 0 0 400 240;" xml:space="preserve">
                    <style type="text/css">
                        .st0{fill:#E2E3E1;}
                    </style>
                    <path id="XMLID_2_" class="st0" d="M85.3,42.6L5.1,67l56.4,114.1c0,0,3.5,7.7,18.6,7.7c20.2,0.4,86.5-28.2,86.5-28.2
                        s-75.9,27.1-92.3,17.9S21.1,83.3,22,75.7C24.6,69.9,85.3,42.6,85.3,42.6z"/>
                    <path id="XMLID_1_" class="st0" d="M41.3,110.7L71.7,169c0,0,3.8,4.7,14.2,4.7s32.4-3,46.8-8c14.4-5,44-21.7,47.3-27.7
                        c3.3-6-21-115-21-115l-12.3,10.7c0,0,8,63.7,6.3,76.3s-3.3,16.7-28.7,26s-37.3,10.7-45,8S41.3,110.7,41.3,110.7z"/>
                    <path id="XMLID_3_" class="st0" d="M165,20.3c-1.5,0,28.5,143.8,26,149.3c-2.5,5.6-10,16.3-43.3,27.7c-33.3,11.3-65.5,11.7-66,13.7
                        c0,7.8,55.3-2.3,68-5.7c12.7-3.3,20-6.7,29-12.7s18.7-19,18.7-19S166.5,20.3,165,20.3z"/>
                    <path id="XMLID_6_" class="st0" d="M316.7,47.2l77.2,32.4l-67.7,107.8c0,0-4.2,7.3-19.3,5.8c-20.1-1.6-83.2-36.9-83.2-36.9
                        s72.8,34.7,90,27.2c17.2-7.5,62.7-89.3,62.6-97C374.3,80.6,316.7,47.2,316.7,47.2z"/>
                    <path id="XMLID_5_" class="st0" d="M353.5,119.4l-36.1,54.9c0,0-4.2,4.3-14.6,3.2s-31.9-6.3-45.7-12.7c-13.8-6.4-41.6-26-44.3-32.3
                        s32.6-112.3,32.6-112.3l11.2,11.9c0,0-14.4,62.5-14.1,75.3s1.6,16.9,25.9,28.8c24.3,11.9,36.1,14.4,44,12.5
                        C320.2,146.8,353.5,119.4,353.5,119.4z"/>
                    <path id="XMLID_4_" class="st0" d="M239.6,17c1.5,0.2-43,140.1-41.1,145.9c1.9,5.8,8.3,17.3,40.3,31.9c32,14.7,64,18.3,64.3,20.3
                        c-0.8,7.7-54.8-8-67.1-12.6c-12.3-4.6-19.2-8.7-27.6-15.6c-8.3-6.9-16.6-20.8-16.6-20.8S238.1,16.8,239.6,17z"/>
                    </svg>
                </a>
                <div class="right-content">
                    <h1><a href="/"><img src="public/img/front-end-happy-hour.svg" alt="Front End Happy Hour"></a></h1>
                    <p class="tagline">${strings[0].tagline}</p>
                    <ul class="feeds">
                        <li><a href="https://itunes.apple.com/us/podcast/front-end-happy-hour/id1089047924?mt=2"><img src="public/img/podcast.svg" alt="Subscripe to iTunes Podcast"></a></li>
                        <li><a href="http://feeds.soundcloud.com/users/soundcloud:users:206137365/sounds.rss"><img src="public/img/rss.svg" alt="Subscripe to RSS feed"></a></li>
                        <li><a href="https://twitter.com/frontendhh"><img src="public/img/twitter.svg" alt="Follow us on Twitter"></a></li>
                        <li><a href="https://facebook.com/frontendhappyhour"><img src="public/img/facebook.svg" alt="Follow us on Facebook"></a></li>
                        <li><a href="/mailing-list"><img src="public/img/mail.svg" alt="Subscribe to our mailing list" class="mail"></a></li>
                    </ul>
                </div>
            </div>
        </header>
                  <div class="episodes container">
                  <h2>Episodes</h2>
                  <ol reversed><li><a href="episodes/the-state-of-web-development/"><h3>The State of Web Development</h3>
<p>February 29, 2016</p>
<p>For our very first episode of the Front End Happy Hour podcast, we have our panelists (Augustus Yuan, Derrick Showers, Jem Young, Ryan Anklam and Ryan Burgess) discuss their opinions on the Medium article posted in early January, titled "The Sad State of Web Development", written by Drew Hamlett. The panel shares their thoughts on front end tools and how they view the current state of web development.</p>
</a></li></ol>
                  </div>
              </body>
          </html>`;
const example = `<li><a href="episodes/the-state-of-web-development/"><h3>The State of Web Development</h3>
<p>February 29, 2016</p>
<p>For our very first episode of the Front End Happy Hour podcast, we have our panelists (Augustus Yuan, Derrick Showers, Jem Young, Ryan Anklam and Ryan Burgess) discuss their opinions on the Medium article posted in early January, titled "The Sad State of Web Development", written by Drew Hamlett. The panel shares their thoughts on front end tools and how they view the current state of web development.</p>
</a></li>`;

test('Test main template', function (t) {
  t.equal(main('home', example), expected, 'main template is correct');
  t.comment('homepage output is working as expected');

  t.end();
});