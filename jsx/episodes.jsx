import React from 'react';

const Episodes = React.createClass({
  displayName: 'Episodes',
  render() {
    return (
      <li>
        <a href={this.props.url}>
          <span className="episode-number">{this.props.epNum}</span>
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
          <p>{this.props.description}</p>
        </a>
      </li>
    );
  }
});

module.exports = Episodes;