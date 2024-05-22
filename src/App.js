import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import EpisodeDetail from './EpisodeDetail';
import About from './About';
import Subscribe from './Subscribe';
import Advertise from './Advertise';
import Terms from './Terms';
import Privacy from './Privacy';
import RyanBurgess from './RyanBurgess';
import JemYoung from './JemYoung';
import StacyLondon from './StacyLondon';
import BrianHolt from './BrianHolt';
import MarsJullian from './MarsJullian';
import { createURL } from './utils';
import './App.css';
import './Footer.css';

const App = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/FrontEndHappyHour/frontendhappyhour.github.io/main/content/episodes.json')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Episodes:", data); // Debugging
        setEpisodes(data);
      })
      .catch(error => console.error("Error fetching episodes:", error));
  }, []);

  return (
    <Router>
      <div className="app">
        <header className="header">
          <img src="/logo.svg" alt="Front End Happy Hour" className="logo" />
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/subscribe" className="nav-link">Subscribe</Link>
            <Link to="/advertise" className="nav-link">Advertise</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home episodes={episodes} />} />
            <Route path="/about" element={<About />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/panelists/ryan-burgess" element={<RyanBurgess />} />
            <Route path="/panelists/jem-young" element={<JemYoung />} />
            <Route path="/panelists/stacy-london" element={<StacyLondon />} />
            <Route path="/panelists/brian-holt" element={<BrianHolt />} />
            <Route path="/panelists/mars-jullian" element={<MarsJullian />} />
            {episodes.map((episode, index) => (
              <Route 
                key={index} 
                path={`/episodes/${createURL(episode.title)}`} 
                element={<EpisodeDetail episode={episode} />} 
              />
            ))}
          </Routes>
        </main>
        <footer className="footer">
          <p>
            Made with <span className="heart">❤</span> by Front End Happy Hour
          </p>
          <nav className="footer-nav">
            <Link to="/terms" className="footer-link">Terms</Link>
            <Link to="/privacy" className="footer-link">Privacy</Link>
            <Link to="/advertise" className="footer-link">Advertise</Link>
          </nav>
        </footer>
      </div>
    </Router>
  );
};

export default App;
