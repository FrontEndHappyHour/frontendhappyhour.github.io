/*
 * Episodes component that shows the loading state version of an episode to
 * show off progressive loading (yeah we cool)
 */

import React from 'react';

class PlaceholderEpisodes extends React.Component {
  static displayName = 'Episodes';

  render() {
    return (
      <li>
        <div className="placeholder-wrapper">
            <div className="container placeholder-episodes">
                <span className="episode-number placeholder"></span>
                <div className="title-area">
                    <div className="title placeholder text-shape"></div>
                    <div className="date placeholder text-shape"></div>
                </div>
                <div className="description placeholder text-shape"></div>
                <div className="description placeholder text-shape"></div>
                <div className="description placeholder text-shape"></div>
            </div>
        </div>
      </li>
    );
  }
}

module.exports = PlaceholderEpisodes;
