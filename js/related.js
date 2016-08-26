const episodeTitle = document.getElementsByTagName('h2');
const episodes = 'https://raw.githubusercontent.com/FrontEndHappyHour/frontendhappyhour.github.io/master/content/episodes.json';

fetch(episodes).then(function(response) {
  const contentType = response.headers.get('content-type');
  return response.json().then(function(json) {
    for (let episodes of json) {
      const title = episodes.title;
      const category = episodes.category;
    }
  });
});