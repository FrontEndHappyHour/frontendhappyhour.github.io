import React from 'react';
import ReactDOM from 'react-dom';
import Related from './related';

// main react app class
const App = React.createClass({
  getInitialState() {
    return {
    };
  },
  componentDidMount() {
  },
  render() {
    return (
      <div>
        <Related />
      </div>
    );
  }
});

module.exports = App;

ReactDOM.render(<App />, target);