var fs = require('fs');
var cheerio = require('cheerio');
var doc = '<!DOCTYPE html>\n<html>';
var homePage = 'index.html';

// read homepage
fs.readFile('./index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  $ = cheerio.load(data);
  $('.episodes ol').empty();

  var output = doc + $('html').html() + '</html>';
  fs.writeFile(homePage, output, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('Updated ' + homePage);
    }
  });
});