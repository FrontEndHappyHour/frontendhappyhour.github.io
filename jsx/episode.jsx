import React from 'react';
import ReactDOM from 'react-dom';
import Related from './related';

// main react app class
class App extends React.Component {
  render() {
    return (
      <div>
        <Related />
      </div>
    );
  }
}

module.exports = App;

ReactDOM.render(<App />, document.getElementById("target"));