import React from 'react';

const Episodes = React.createClass({
  displayName: 'Episodes',
  render() {
    return (
      <li>
        <a href={this.props.url}>
          <div className="container">
            <span className="episode-number">{this.props.epNum}</span>
            <p>{this.props.date}</p>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </div>
        </a>
      </li>
    );
  }
});

module.exports = Episodes;