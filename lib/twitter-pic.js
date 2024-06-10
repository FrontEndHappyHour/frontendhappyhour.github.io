// twitter-pic
// Get user's Twitter profile picture
'use strict';
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');

const download = function(url, username, path) {
  request(url, {encoding: 'binary'}, function (error, response, body) {
    if(error) {
      return console.log(error);
    }
    if(username.substring(0, 1) === '_') {
      username = username.substring(1);
    }
    return fs.writeFile(`./${path}/${username}.jpg`, body, 'binary', function (err) {
      if(err) {
        return console.log(err);
      }
      return console.log(`Created ./${path}/${username}.jpg`);
    });
  });
};

module.exports = function twitterPic(username, path) {
  request({
      method: 'GET',
      url: `https://twitter.com/${username}`
  }, function(err, response, body, callback) {
    if(err) {
      return console.error(err);
    }
    const $ = cheerio.load(body);
    const image = $('.ProfileAvatar-image').attr('src');

    //download image
    return download(image, username, path);
  });
};
