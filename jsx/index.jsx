var React = require('react');
var Header = require('./header');
var episodes = require('../content/episodes.json');
class App extends React.Component {
  constructor(props) {
  }
  render() {
    return (
      <Header />
    );
  }

}

module.exports = App;
