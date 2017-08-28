const fs = require('fs');
const prompt = require('prompt');
const episodes = fs.readFileSync('./content/episodes.json');
const fullList = JSON.parse(episodes);
const linkName = process.argv.slice(2)[0];

// an object of regularly used links that can be called without having to prompt questions
const popular = {
  react: {
    name: 'React',
    url: 'https://facebook.github.io/react/'
  },
  angular: {
    name: 'Angular',
    url: 'https://angular.io/'
  },
  ember: {
    name: 'Ember',
    url: 'https://emberjs.com/'
  },
  vue: {
    name: 'Vue',
    url: 'https://vuejs.org/'
  },
  netflix: {
    name: 'Netflix',
    url: 'https://www.netflix.com/'
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/'
  },
  evernote: {
    name: 'Evernote',
    url: 'https://www.evernote.com/'
  },
  atlassian: {
    name: 'Atlassian',
    url: 'https://www.atlassian.com/'
  }
}

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
  console.log('New link added!');
};

// start prompt
if (linkName === undefined) {
  prompt.start();

  // prompt questions
  prompt.get(schema, function (err, result) {
    // pass title and url to write function
    write(result.title.trim(), result.url.trim());
  });
}else {
  // pass title and url to write function
  write(popular[linkName].name, popular[linkName].url);
}


