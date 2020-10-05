// This command is used to add HTML links in the transcript files
// The command searches through a file and replaces twitter handles any .com websites to replace with HTML links
// Useage
// Use command: node transcript-links [add transcript filename]

'use strict';
const fs = require('fs');
const { functionsIn } = require('lodash');
const dir = './transcripts/';
let newContent;
let fileName = process.argv.slice(2)[0];

// if fileName doesn't have .js file extension add it
if (!fileName.includes('.js')) {
    fileName = fileName + '.js';
}

// get the file content
newContent = fs.readFileSync(dir + fileName, 'utf-8');

// replace weird transcription errors
//website strings
const websiteStrings = ['front end happy hour comm', 'front happier.com', 'front and happy hour dot com', 'front end happier, calm'];
websiteStrings.forEach(function(string) {
    newContent = newContent.replace(string, 'FrontEndHappyHour.com');
});

// replace references to front end h h to make it a twitter handle
const fehhTwitterStrings = [' front end hh', ' front end h h', ' front end, h h', ' front end HGH'];
fehhTwitterStrings.forEach(function(string) {
    newContent = newContent.replace(string, ' @frontendhh');
});

// create website link for FrontEndHappyHour.com
newContent = newContent.replace('FrontEndHappyHour.com', `<a href="https://frontendhappyhour.com">FrontEndHappyHour.com</a>`);

// create twitter links
const twitter = newContent.match(/@\w*/g);
// check if there are twitter names in the transcript
if(twitter !== null) {
    twitter.forEach(twitterName => {
        let noAt = twitterName.replace('@', '');
        newContent = newContent.replace(twitterName, `<a href="https://twitter.com/${noAt}">${twitterName}</a>`);
    });
}

// save updated content
fs.writeFileSync(dir + fileName, newContent, 'utf-8');