// This command is used to format the transcript files
// Useage
// Use command: node transcript-format [add transcript filename]

'use strict';
const fs = require('fs');
const dir = './test/';
const panelists = require('./content/panelists.json');
const guests = require('./content/episodes.json');
let newContent;
let fileName = process.argv.slice(2)[0];

// if fileName doesn't have .js file extension add it
if (!fileName.includes('.js')) {
    fileName = fileName + '.js';
}

// get the file content
newContent = fs.readFileSync(dir + fileName, 'utf-8');

// remove transcribed by otter.ai
newContent = newContent.replace('Transcribed by https://otter.ai', '</p>');

// replace panelist names to formatt
//find panelist name strings
panelists.forEach(function(string) {
    const panelistName = string.name;
    const formatName = newContent.match(panelistName + '  ', 'g');
    if (formatName !== null) {
        formatName.forEach(check => {
            const reg = new RegExp(check, 'g');
            newContent = newContent.replace(reg, `</p>\n<p><strong>${panelistName}</strong><br />`);
        });
    }
});

//find guest name strings
guests.forEach(function(string) {
    const guestName = string.guests.name;
    const formatGuestName = newContent.match(guestName + '  ', 'g');
    if (formatGuestName !== null) {
        formatGuestName.forEach(check => {
            const reg = new RegExp(check, 'g');
            newContent = newContent.replace(reg, `</p>\n<p><strong>${guestName}</strong><br />`);
        });
    }
});

// fix weird references to Ryan's twitter
const ryanTwitter = ['Burgess D Ryan'];
ryanTwitter.forEach(function(string) {
    newContent = newContent.replace(string, '@burgessdryan');
});


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

// save updated content
fs.writeFileSync(dir + fileName, newContent, 'utf-8');