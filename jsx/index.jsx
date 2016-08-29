const React = require('react');
const Related = require('./related');

// main react app class
const App = React.createClass({
  displayName: 'App',
  getInitialState() {
    return {};
  },
  componentDidMount() {
  },
  render() {
    return (
      <Related />
    );
  }
});

module.exports = App;