import React from 'react';
import shuffle from '../lib/shuffle-object';
import createUrl from '../lib/create-url';
const episodes = 'https://frontendhappyhour.com/content/episodes.json';
const obj = [];
let cat = '';
const relatedTitles = [];

class Related extends React.Component {
  static displayName = 'Related';
  state = {};

  componentDidMount() {
    const component = this;
    const episodeTitle = document.getElementById('heading').innerHTML;
    fetch(episodes).then((response) => {
      const contentType = response.headers.get('content-type');
      return response.json().then((json) => {
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
            const url = createUrl('/episodes/' + ep.title);
            relatedTitles.push({'title': epTitle, 'url': url});
          } 
        }

        component.setState({ related: relatedTitles });
      });
    });
  }

  render() {
    return (
      <div className='related container'>
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
}

module.exports = Related;