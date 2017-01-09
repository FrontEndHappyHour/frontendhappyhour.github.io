import React from 'react';
import ReactDOM from 'react-dom';
import Episodes from './panel-episodes';

const App = React.createClass({
  getInitialState() {
    return {};
  },
  componentDidMount() {
  },
  render() {
    return (
      <div>
        <Episodes />
      </div>
    );
  }
});

module.exports = App;

ReactDOM.render(<App />, target);