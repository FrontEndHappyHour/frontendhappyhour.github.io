import React from 'react';
import shuffle from '../lib/shuffle-object';
const episodes = 'http://frontendhappyhour.com/content/episodes.json';
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
        for (let ep of shuffledObj) {
          if(ep.category === cat && relatedTitles.length <= 3) {
            const epTitle = ep.title;
            const url = '/episodes/' + epTitle.replace(/ /g, '-').toLowerCase().replace(/---/g, '-').replace(/:-/g, '-').trim();
            relatedTitles.push({'title': epTitle, 'url': url});
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
          {relatedTitles.map(function(episode, i) {
            i++;
            return <li key={i}><a href={episode.url}>{episode.title}</a></li>;
          })}
        </ul>
      </div>
    );
  }
});

module.exports = Related;