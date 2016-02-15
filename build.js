var fs = require('fs');
var cheerio = require('cheerio');
var mkdirp = require('mkdirp');
var path = require('path');
var currentTitles = [];
var doc = '<!DOCTYPE html>\n<html>';
var homePage = 'index.html';
var output;
var page;
var epPage;

// read homepage
fs.readFile('./index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  page = data;
});

// read episode
fs.readFile('./episode.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  epPage = data;
});

// contains prototype
Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
}

// get episode json content
fs.readFile('./content/episodes.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  data = JSON.parse(data);
  $ = cheerio.load(page);
  ep = cheerio.load(page);

  $('.episodes ol li').each(function(key, callback){
    var title = $(this).find('h3').text();
    currentTitles.push(title);
  });

  for(var i = 0; i < data.length; i++) {
    var epTitle = data[i].title;
    
    if(!currentTitles.contains(epTitle)){

      var epDate = data[i].published;
      var epDesc = data[i].description;
      var link = epTitle.replace(/ /g, '-').toLowerCase();
      var id = data[i].id;
      var picks = data[i].picks;

      $('.episodes ol').append(
        '<li><a href="/episodes/'+ link +'/"><h3>'+ epTitle + '</h3>' +
        '<time>'+ epDate + '</time>' +
        '<p>' + epDesc + '</p>' +
        '</a></li>'
      );

      // create html page for new episode
      // create new Title
      ep('title').prepend(epTitle + ' - ');

      // create new page description
      ep('meta[name=description]').attr('content', epDesc);

      //update CSS to episode css
      ep('link[href="public/css/style.css"]').attr('href','../../public/css/episode.css');

      // add episode content info
      ep('.episodes').html(
        '<h2>' + epTitle + '</h2>' +
        '<time>Published ' + epDate + '</time>' +
        '<div class="audio">' +
        '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + id + '&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>' +
        '</div>' +
        '<p>' + epDesc + '</p>'
      );

      // if picks add picks
      if(picks.length !== 0){
        ep('.episodes').append(
          '<div class="picks">' +
          '<h3>Picks</h3>' +
          '<ul>' +
          '</ul>' +
          '</div>'
        );

        for(var a = 0; a < picks.length; a++) {
          ep('.episodes ul').append(
            '<li>' +
            '<a href="' + picks[a].url + '">' + picks[a].title + '</a>' + ' - ' + picks[a].from +
            '</li>'
          );
        }
      }

      var newEpOutput = doc + ep('html').html() + '</html>';
      mkdirp('./episodes/' + link, function(err) {
        if(err) {
          console.log(err);
        } 
        fs.writeFile('./episodes/' + link + '/index.html', newEpOutput, function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log('Added new episode page: /episodes/' + link);
          }
        });
      });
    }
  }

  output = doc + $('html').html() + '</html>';

  fs.writeFile(homePage, output, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('Updated ' + homePage);
    }
  });

});