import React from 'react';
import ReactDOM from 'react-dom';
import Episodes from './panel-episodes';

class App extends React.Component {
  state = {};

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Episodes />
      </div>
    );
  }
}

module.exports = App;

ReactDOM.render(<App />, document.getElementById('target'));