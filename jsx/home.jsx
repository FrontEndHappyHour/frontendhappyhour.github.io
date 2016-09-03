import React from 'react';
import ReactDOM from 'react-dom';
import Episodes from './episodes';
import episodes from '../content/episodes.json';

const App = React.createClass({
  getInitialState() {
    return {
      episodeList: episodes
    };
  },
  componentDidMount() {
  },
  render() {
    return (
      <div class="episodes container">
        <ol reversed>
          {this.state.episodeList.map(function (ep, i) {
            const url = '/episodes/' + ep.title.replace(/ /g, '-').toLowerCase().replace(/---/g, '-').replace(/:-/g, '-').trim();
            i++;
            return (
              <Episodes key={i} url={url} title={ep.title} date={ep.published} description={ep.description} />
            )
          })}
        </ol>
      </div>
    );
  }
});

module.exports = App;

ReactDOM.render(<App />, target);