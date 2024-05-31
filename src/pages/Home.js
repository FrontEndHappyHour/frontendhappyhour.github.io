import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createURL } from '../utils';
import '../css/Home.css';

const EPISODES_PER_PAGE = 5;
const MAX_PAGE_NUMBERS = 5;

const Home = ({ episodes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  useEffect(() => {
    setFilteredEpisodes(episodes);
  }, [episodes]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = episodes.filter(episode => 
      episode.title.toLowerCase().includes(term) ||
      episode.description.toLowerCase().includes(term) ||
      (episode.tags && episode.tags.some(tag => tag.toLowerCase().includes(term))) ||
      episode.published.toLowerCase().includes(term)
    );
    setFilteredEpisodes(filtered);
    setCurrentPage(1);
  };

  const indexOfLastEpisode = currentPage * EPISODES_PER_PAGE;
  const indexOfFirstEpisode = indexOfLastEpisode - EPISODES_PER_PAGE;
  const currentEpisodes = filteredEpisodes.slice(indexOfFirstEpisode, indexOfLastEpisode);

  const totalPageCount = Math.ceil(filteredEpisodes.length / EPISODES_PER_PAGE);

  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const halfWindow = Math.floor(MAX_PAGE_NUMBERS / 2);
    let startPage = Math.max(1, currentPage - halfWindow);
    let endPage = Math.min(totalPageCount, currentPage + halfWindow);

    if (currentPage - halfWindow <= 0) {
      endPage = Math.min(totalPageCount, endPage + (halfWindow - currentPage + 1));
    }

    if (currentPage + halfWindow > totalPageCount) {
      startPage = Math.max(1, startPage - (currentPage + halfWindow - totalPageCount));
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? 'active' : ''}>
          <a href="/" onClick={(event) => handleClick(event, i)}>{i}</a>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="home">
      <div className="about">
        <h2>Welcome to the Front End Happy Hour podcast!</h2>
        <p>A software engineering podcast featuring a panel of Software Engineers from Netflix, Twitch, & Atlassian talking over drinks about Frontend, JavaScript, and career development.</p>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search episodes..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="episodes">
        {currentEpisodes.map((episode, index) => (
          <div key={index} className="episode">
            <div className="episode-number">{episode.episode}</div>
            <div className="episode-content">
              <Link to={`/episodes/${createURL(episode.title)}`} className="episode-title">{episode.title}</Link>
              <p className="episode-description">{episode.description}</p>
              <p className="episode-date">{episode.date}</p>
              <Link to={`/episodes/${createURL(episode.title)}`} className="episode-link"><button>Listen Now</button></Link>
            </div>
          </div>
        ))}
      </div>
      <ul className="pagination">
        {renderPageNumbers()}
      </ul>
    </div>
  );
};

export default Home;
