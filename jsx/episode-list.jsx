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
import PlaceholderEpisodes from './placeholder-episodes';
import createUrl from '../lib/create-url';

const EpisodeList = ({
  episodes,
  listNum,
  isLoading
}) => {
  // if loading, render loading placeholder view
  if (isLoading || episodes.length === 0) {
    return (
      <ul>
        {Array(listNum).fill().map((empty) => {
          return <PlaceholderEpisodes />;
        })}
      </ul>
    );
  }
  // If we have loaded all the episodes, render the list
  return (
    <ul>
      {episodes.map(ep => {
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
};

export default EpisodeList;