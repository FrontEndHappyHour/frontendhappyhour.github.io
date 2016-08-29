const React = require('react');
const shuffle = require('../lib/shuffle-object');
const episodes = 'https://raw.githubusercontent.com/FrontEndHappyHour/frontendhappyhour.github.io/master/content/episodes.json';
const obj = [];
let cat = '';
const relatedTitles = [];
const Related = React.createClass({
  displayName: 'Related',
  getInitialState() {
    return {};
  },
  componentDidMount() {
    const component = this;
    const episodeTitle = document.getElementById('heading').innerHTML;
    fetch(episodes).then(function(response) {
      const contentType = response.headers.get('content-type');
      return response.json().then(function(json) {
        for (let episodes of json) {
          const title = episodes.title;
          const category = episodes.category;
          if(episodeTitle !== title) {
            obj.push({'title': title, 'category': category});
          }else {
            cat = category;
          }
        }
        
        const shuffledObj = shuffle(obj);

        // find related items from title and category
        for (let related of shuffledObj) {
          if(shuffledObj.category === cat && relatedTitles.length <= 3) {
            relatedTitles.push(shuffledObj.title);
          } 
        }

        component.setState({ related: relatedTitles });
      });
    });
  },
  render() {
    return (
      <div className='related'>
        <h2>Related episodes</h2>
        <ul>
          {relatedTitles.map(function(title, i) {
            const url = title.replace(/ /g, '-').toLowerCase().replace(/---/g, '-').replace(/:-/g, '-');
            return <li key={i}><a href="{url}">{title}</a></li>;
          })}
        </ul>
      </div>
    );
  }
});

module.exports = Related;