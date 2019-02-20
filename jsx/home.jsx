import React from 'react';
import ReactDOM from 'react-dom';
import Episodes from './episodes';
import EpisodeList from './episode-list';
import createUrl from '../lib/create-url';
import pageUrlData from '../lib/page-url-data';

const episodeListURL = 
  "https://raw.githubusercontent.com/FrontEndHappyHour/frontendhappyhour.github.io/master/content/episode-list.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    const numOnPage = 5;
    const pageData = pageUrlData(numOnPage);
    this.state = {
      isLoading: true,
      episodeList: [],
      startValue: pageData.startValue,
      listNum: pageData.listNum,
      numOnPage,
      showPrev: pageData.startValue !== 0,
      showNext: false
    };
  }

  componentDidMount() {
    fetch(episodeListURL).then(response => {
      response.json().then(responseJSON => {
        const epList = Array.prototype.reverse.call(responseJSON);
        this.setState({
          episodeList: epList,
          isLoading: false,
          showNext: epList.length > 0
        });
      });
    });
  }

  showPrevButton = (show) => {
    this.setState({showPrev: show});
  };

  showNextButton = (show) => {
    this.setState({showNext: show});
  };

  previousList = () => {
    if(this.state.startValue >= 0) {
      this.setState({
        startValue: this.state.startValue - this.state.numOnPage,
        listNum: this.state.listNum - this.state.numOnPage
      });
    }

    // show next button
    this.showNextButton(true);

    // hide previous button if its the first page in the list
    if (this.state.startValue <= 5) {
      this.showPrevButton(false);
    }
  };

  nextList = () => {
    this.setState({ startValue: this.state.startValue + this.state.numOnPage, listNum: this.state.listNum + this.state.numOnPage });

    // show previous button
    this.showPrevButton(true);

    // hide next button if its the last page in the list
    if ((this.state.startValue + (this.state.numOnPage * 2)) >= this.state.episodeList.length) {
      this.showNextButton(false);
    }
  };

  render() {
    let prevButton;
    if(this.state.showPrev !== false) {
      const prevButtonHref = `#/page=${(this.state.startValue - this.state.numOnPage) / this.state.numOnPage}`;
      prevButton = <a key={prevButtonHref} href={prevButtonHref} className="prev" onClick={ this.previousList }>
        Previous
      </a>;
    }

    let nextButton;
    if(this.state.showNext !== false) {
      const nextButtonHref = `#/page=${(this.state.startValue + this.state.numOnPage) / this.state.numOnPage}`;
      nextButton = <a key={nextButtonHref} href={nextButtonHref} className="next" onClick={ this.nextList }>
        Next
      </a>;
    }

    // pass only the episodes relevant for rendering
    const episodes = this.state.episodeList.slice(this.state.startValue, this.state.listNum);
    return (
      <div>
        <EpisodeList
          episodes={episodes}
          listNum={this.state.listNum}
          isLoading={this.state.isLoading}
        />
        <div className="paging container">
          {prevButton}
          {nextButton}
        </div>
      </div>
    );
  }
}

module.exports = App;

ReactDOM.render(<App />, document.getElementById('target'));
