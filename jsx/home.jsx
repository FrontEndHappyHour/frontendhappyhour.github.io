import React from 'react';
import ReactDOM from 'react-dom';
import Episodes from './episodes';
import episodes from '../content/episodes.json';

const App = React.createClass({
  getInitialState() {
    return {
      episodeList: episodes,
      startValue: 0,
      listNum: 5,
      numOnPage: 5,
      showPrev: false,
      showNext: true
    };
  },
  componentDidMount() {

  },
  showPrevButton(show) {
    this.setState({showPrev: show});
  },
  showNextButton(show) {
    this.setState({showNext: show});
  },
  previousList() {
    if(this.state.startValue >= 0) {
      this.setState({ startValue: this.state.startValue - this.state.numOnPage, listNum: this.state.listNum - this.state.numOnPage });
    }

    // show next button
    this.showNextButton(true);

    // hide previous button if its the first page in the list
    if (this.state.startValue <= 5) {
      this.showPrevButton(false);
    }
  },
  nextList(){
    this.setState({ startValue: this.state.startValue + this.state.numOnPage, listNum: this.state.listNum + this.state.numOnPage });
    
    // show previous button
    this.showPrevButton(true);

    // hide next button if its the last page in the list
    if ((this.state.startValue + (this.state.numOnPage * 2)) >= this.state.episodeList.length) {
      this.showNextButton(false);
    }
  },
  render() {
    let prevButton;
    if(this.state.showPrev !== false) {
      prevButton = <a href="#" className="prev" onClick={ this.previousList }>Previous</a>;
    }

    let nextButton;
    if(this.state.showNext !== false) {
      nextButton = <a href="#" className="next" onClick={ this.nextList }>Next</a>;
    }

    return (
      <div>
        <div className="paging">
          {prevButton}
          {nextButton}
        </div>
        <ul>
          {this.state.episodeList.map((ep, i) => {
            const url = '/episodes/' + ep.title.replace(/ /g, '-').toLowerCase().replace(/---/g, '-').replace(/:-/g, '-').replace(/,/g, '').trim();
            i++;
            if(i > this.state.startValue && i <= this.state.listNum) {
              return (
                <Episodes key={i} epNum={ep.episode} url={url} title={ep.title} date={ep.published} description={ep.description} />
              )
            }
          })}
        </ul>
        <div className="paging">
          {prevButton}
          {nextButton}
        </div>
      </div>
    );
  }
});

module.exports = App;

ReactDOM.render(<App />, target);