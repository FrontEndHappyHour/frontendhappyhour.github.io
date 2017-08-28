const fs = require('fs');
const prompt = require('prompt');
const episodes = fs.readFileSync('./content/episodes.json');
const fullList = JSON.parse(episodes);
const linkName = process.argv.slice(2)[0];
// an object of regularly used links that can be called without having to prompt questions
const popular = require('./content/popular-links.json');

// prompt schema for questions
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

// a function to write to the episodes JSON
const write = (title, url) => {
  // create an object with the title and url
  const obj = {'title': title, 'url': url};
  // push the obj of link to the full list
  fullList[0].links.push(obj);
  // sync the new object to the links in episodes.json
  fs.writeFileSync('./content/episodes.json', JSON.stringify(fullList, null, 4));
  console.log(`${title} link added!`);
};

const promptQuestions = () => {
  prompt.start();

  // prompt questions
  prompt.get(schema, function (err, result) {
    // pass title and url to write function
    write(result.title.trim(), result.url.trim());
  });
};

// start prompt
if (linkName === undefined) {
  promptQuestions();
}else {
  // check to see if key exists in popular object before trying to write to links
  if (popular.hasOwnProperty(linkName)) {
    // pass title and url to write function
    write(popular[linkName].name, popular[linkName].url);
  }else {
    // if the key doesn't exist in popular object than start prompt for questions to add a new link
    console.log(`${linkName} isn't available yet. Add a new link instead.`);
    // start prompt to add a new link
    promptQuestions();
  }
  
}


