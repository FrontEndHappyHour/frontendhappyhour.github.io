const fs = require('fs');
const prompt = require('prompt');
const episodes = fs.readFileSync('./content/episodes.json');
const fullList = JSON.parse(episodes);

// start prompt
prompt.start();

// prompt questions
prompt.get(['title', 'url'], function (err, result) {
   const obj = {'title': result.title, 'url': result.url};
   fullList[0].links.push(obj);
   fs.writeFileSync('./content/episodes.json', JSON.stringify(fullList, null, 4));
   console.log('New link added!');
});
