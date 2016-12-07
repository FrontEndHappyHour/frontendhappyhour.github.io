const fs = require('fs');
const prompt = require('prompt');
const episodes = fs.readFileSync('./content/episodes.json');
const fullList = JSON.parse(episodes);

// prompt schema
const schema = {
  properties: {
    title: {
      description: 'Link title',
      pattern: /([^\s]+)/g,
      message: 'Name must be only letters, spaces, or dashes',
      required: true
    },
    url: {
      description: 'Link URL',
      pattern: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/,
      message: 'Must be a valid URL',
      required: true
    }
  }
};

// start prompt
prompt.start();

// prompt questions
prompt.get(schema, function (err, result) {
   const obj = {'title': result.title, 'url': result.url};
   fullList[0].links.push(obj);
   fs.writeFileSync('./content/episodes.json', JSON.stringify(fullList, null, 4));
   console.log('New link added!');
});
