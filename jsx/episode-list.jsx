/*
 * EpisodeList component that renders in the homepage
 *
 * We break this component out of the homepage so we can separate
 * the request logic for episodes list, allolwing us to support fallback
 * alternatives on the homepage when the episodes haven't fully loaded
 * yet
 */

import React from 'react';
import Episodes from './episodes';
import createUrl from '../lib/create-url';

const episodeListURL = 
  "https://raw.githubusercontent.com/FrontEndHappyHour/frontendhappyhour.github.io/master/content/episode-list.json";

  class EpisodeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      epList: []
    };
  }

  componentDidMount() {
    fetch(episodeListURL).then(response => {
      response.json().then(responseJSON => {
        const epList = Array.prototype.reverse.call(responseJSON);
        this.setState({ epList });
      });
    });
  }

  render() {
    const { startValue, listNum } = this.props;
    const currentEpisodes = this.state.epList.slice(startValue, listNum);
    return this.state.epList.length > 0 && (
      <ul>
        {currentEpisodes.map(ep => {
          const url = createUrl('/episodes/' + ep.title);
          return (
            <Episodes
              key={ep.episode}
              epNum={ep.episode}
              url={url}
              title={ep.title}
              date={ep.published}
              description={ep.description}
            />
          );
        })}
      </ul>
    );
  }
}
export default EpisodeList;