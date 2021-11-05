// This command is used to format the transcript files
// Useage
// Use command: node transcript-format [add transcript filename]

'use strict';
const fs = require('fs');
const dir = './transcripts/';
const panelists = require('./content/panelists.json');
const guests = require('./content/episodes.json');
const { functionsIn } = require('lodash');
let newContent;
let fileName = process.argv.slice(2)[0];
const guestNames = [];

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

// build an array of all guest names
guests.forEach(function(data) {
    const guests = data.guests;

    // only get names for for episodes with guests
    if (guests.length !== 0) {
        guests.forEach(function(guest) {
            const guestName = guest.name;
            if (!guestNames.includes(guestName)) {
                guestNames.push(guestName);
            }
        });
    }
});

//find guest name strings
guestNames.forEach(function(string) {
    const guestName = string;

    const formatGuestName = newContent.match(guestName + '  ', 'g');
    if (formatGuestName !== null) {
        formatGuestName.forEach(check => {
            const regGuest = new RegExp(check, 'g');
            newContent = newContent.replace(regGuest, `</p>\n<p><strong>${guestName}</strong><br />`);
        });
    }
});

// find and format references to All
const all = newContent.match(/All  /g);
// check if there are twitter names in the transcript
if(all !== null) {
    all.forEach(allString => {
        newContent = newContent.replace(allString, `</p>\n<p><strong>All</strong><br />`);
    });
}

// fix weird references to Ryan's twitter
const ryanTwitter = ['Burgess D Ryan'];
ryanTwitter.forEach(function(string) {
    newContent = newContent.replace(string, '@burgessdryan');
});

// Fix references to Jem's name
const jemName = newContent.match(/Jim/g);
if(jemName !== null) {
    jemName.forEach(jemString => {
        newContent = newContent.replace(jemString, `Jem`);
    });
}

// Fix references to Mars' name
const marsName = newContent.match(/Mars Julian/g);
if(marsName !== null) {
    marsName.forEach(marsString => {
        newContent = newContent.replace(marsString, `Mars Jullian`);
    });
}

// Fix references to Augustus' name
const augName = newContent.match(/Augustus Yun/g);
if(augName !== null) {
    augName.forEach(augString => {
        newContent = newContent.replace(augString, `Augustus Yuan`);
    });
}

// replace weird transcription errors
//website strings
const websiteStrings = ['front end happy hour comm', 'front happier.com', 'front and happy hour dot com', 'front end happier, calm'];
websiteStrings.forEach(function(string) {
    newContent = newContent.replace(string, 'FrontEndHappyHour.com');
});

// replace references to front end h h to make it a twitter handle
const fehhTwitterStrings = [' front end hh', ' front end h h', ' front end, h h', ' front end HGH', 'front end, H H', 'front end ah ah'];
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


// remove the first </p> tag
newContent = newContent.replace('</p>', '');

// add JS module exports
newContent = 'module.exports = function() {\n' + '\'use strict\';\n' + 'const transcript = `\n' + newContent + '`;\n' +  'return transcript;\n' + '};';

// add a console message if a speaker was missed and wasn't labeled
const unknownSpeaker = newContent.match(/Unknown Speaker  /g);
if (unknownSpeaker !== null) {
    // check to see how many unknown speakers were idenified.
    if (unknownSpeaker.length <= 1) {
        console.log(`Unknown speaker identified`);
    }else {
        console.log(`Unknown speaker identified ${unknownSpeaker.length} times`);
    }
    
}

// save updated content
fs.writeFileSync(dir + fileName, newContent, 'utf-8');