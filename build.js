'use strict';
const fs = require('fs');
const cheerio = require('cheerio');
const mkdirp = require('mkdirp');
const episodes = require('./content/episodes.json');
const panelists = require('./content/panelists.json');
const write = require('./lib/write');
// Templates
const episodeList = require('./templates/episode-list');
const episodePage = require('./templates/episode-page');
const episodeGuests = require('./templates/episode-guests');
const episodeLinks = require('./templates/episode-links');
const episodePicks = require('./templates/episode-picks');
const episodePanel = require('./templates/episode-panel');
const doc = '<!DOCTYPE html>\n<html>';
let output;

// read homepage
const page = fs.readFileSync('./index.html', 'utf8');

// get episode json content
function episodeContent() {

    const $ = cheerio.load(page);
    const ep = cheerio.load(page);

    //just redo the episodes every time
    $('.episodes ol li').remove();

    let panel;
    for(let i = episodes.length - 1; i >= 0; i--) {
      const epTitle = episodes[i].title;
      panel = episodes[i].panel;
      const epDate = episodes[i].published;
      const epDesc = episodes[i].description;
      const link = epTitle.replace(/ /g, '-').toLowerCase();
      const id = episodes[i].id;
      const picks = episodes[i].picks;
      const links = episodes[i].links;
      const guests = episodes[i].guests;

      // create list of episodes on the homepage
      $('.episodes ol').prepend(
        episodeList(link, epTitle, epDate, epDesc)
      );

      // create html page for new episode
      // create new Title
      ep('title').html(epTitle + ' - Front End Happy Hour');

      // create new page description
      ep('meta[name=description]').attr('content', epDesc);

      //update CSS to episode css
      ep('link[href="public/css/style.css"]').attr('href', '../../public/css/episode.css');

      ep('img').each(function() {
        if(ep(this).attr('src').indexOf('../../') === -1) {
          ep(this).attr('src', '../../' + ep(this).attr('src'));
        }
      });

      // add episode content info
      ep('.episodes').html(
        episodePage(epTitle, epDate, id, epDesc)
      );

      if(guests.length !== 0) {
        // add episode guests
        ep('.episodes').append(
          episodeGuests(guests)
        );
      }

      if(links.length !== 0) {
        // add episode links
        ep('.episodes').append(
          episodeLinks(links)
        );
      }

      // if picks add picks
      if(picks.length !== 0) {
        // add pick links
        ep('.episodes').append(
          episodePicks(picks)
        );
      }

      ep('.episodes').append(
        episodePanel(panelists, panel)
      );

      const newEpOutput = doc + ep('html').html() + '</html>';

      mkdirp.sync(`./episodes/${link}`);

      write(`./episodes/${link}/index.html`, newEpOutput);
    }

    output = doc + $('html').html() + '</html>';

    // update index.html
    write('index.html', output);
}

episodeContent();
