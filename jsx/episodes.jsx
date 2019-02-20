/*
 * Episodes component that shows a component in the Episodes list on the
 * homepage.
 */

import React from 'react';

class Episodes extends React.Component {
  static displayName = 'Episodes';

  render() {
    return (
      <li>
        <a href={this.props.url}>
          <div className="container episode">
            <span className="episode-number">{this.props.epNum}</span>
            <h3 className="title">{this.props.title}</h3>
            <p className="date">{this.props.date}</p>
            <p className="description">{this.props.description}</p>
          </div>
        </a>
      </li>
    );
  }
}

module.exports = Episodes;
