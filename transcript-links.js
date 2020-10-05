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

// create website link for FrontEndHappyHour.com
newContent = newContent.replace('FrontEndHappyHour.com', `<a href="https://frontendhappyhour.com">FrontEndHappyHour.com</a>`);

// create twitter links
const twitter = newContent.match(/@\w*/g);
twitter.forEach(twitterName => {
    let noAt = twitterName.replace('@', '');
    newContent = newContent.replace(twitterName, `<a href="https://twitter.com/${noAt}">${twitterName}</a>`);
});

// save updated content
fs.writeFileSync(dir + fileName, newContent, 'utf-8');