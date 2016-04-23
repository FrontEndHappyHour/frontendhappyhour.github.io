'use strict';
const fs = require('fs');
const cheerio = require('cheerio');
const write = require('./lib/write');
const doc = '<!DOCTYPE html>\n<html>';

// read homepage
fs.readFile('./index.html', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  const $ = cheerio.load(data);
  $('.episodes ol').empty();

  let output = doc + $('html').html() + '</html>';

  // update index.html
  write('index.html', output);
});