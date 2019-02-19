/*
 * Episodes component that shows a component in the Episodes list on the
 * homepage.
 */

import React from 'react';

class EpisodesLoading extends React.Component {
  render() {
    return (
      <li>
        <div className="container placeholder">
            <span className="episode-number"></span>
            <div className="title-placeholder"></div>
            <div className="date-placeholder"></div>
            <div className="description-placeholder"></div>
        </div>
      </li>
    );
  }
}

module.exports = EpisodesLoading;
