'use strict';
const fs = require('fs');
const cheerio = require('cheerio');
const doc = '<!DOCTYPE html>\n<html>';
const homePage = 'index.html';

// read homepage
fs.readFile('./index.html', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  const $ = cheerio.load(data);
  $('.episodes ol').empty();

  let output = doc + $('html').html() + '</html>';
  fs.writeFile(homePage, output, function (err) {
    if(err) {
      console.log(err);
    } else {
      console.log('Updated ' + homePage);
    }
  });
});