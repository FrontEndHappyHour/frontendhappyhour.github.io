import React from 'react';
import createUrl from '../lib/create-url';
const episodes =
  "https://raw.githubusercontent.com/FrontEndHappyHour/frontendhappyhour.github.io/master/content/episodes.json";
const onEps = [];

class PanelEpisodes extends React.Component {
  static displayName = 'Panelist Episodes';
  state = {};

  componentDidMount() {
    fetch(episodes).then((response) => {
      
      const panelist = document.title.split(' -');
      const contentType = response.headers.get('content-type');
      return response.json().then((json) => {
        for (let episodes of json) {
          const title = episodes.title;
          const url = createUrl('/episodes/' + title);
          const panel = episodes.panel;
          // if panelist was on episode push to new array
          if (panel.indexOf(panelist[0]) !== -1) {
            onEps.push({'title': title, 'url': url});
          }
        }

        this.setState({ eps: onEps });
      });
    });
  }

  render() {
    return (
      <div className='episodes'>
        <h2>Episodes</h2>
        <ul>
          {onEps.map(function(episode, i) {
            i++;
            return <li key={i}><a href={episode.url}>{episode.title}</a></li>;
          })}
        </ul>
      </div>
    );
  }
}

module.exports = PanelEpisodes;