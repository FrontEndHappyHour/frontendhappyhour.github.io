import React from 'react';
import Related from './related';

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