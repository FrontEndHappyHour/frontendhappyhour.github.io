import React from 'react';
import ReactDOM from 'react-dom';
import Episodes from './episodes';
import createUrl from '../lib/create-url';
const episodes = 'http://frontendhappyhour.com/content/episodes.json';
const epList = [];

const App = React.createClass({
  getInitialState() {
    return {
      episodeList: epList,
      startValue: 0,
      listNum: 5,
      numOnPage: 5,
      showPrev: false,
      showNext: true
    };
  },
  componentDidMount() {
    fetch(episodes).then((response) => {
      const contentType = response.headers.get('content-type');
      return response.json().then((json) => {
        for (let episodeAjax of json) {
          const title = episodeAjax.title;
          const desc = episodeAjax.description;
          const epNum = episodeAjax.episode;
          const date = episodeAjax.published;
          // push episode info to object epList
          epList.push({'title': title, 'published': date, 'description': desc, 'episode': epNum});
        }
        this.setState({ episodeList: epList });
      });
    });
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
            const url = createUrl(ep.title);
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