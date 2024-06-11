import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import EpisodeDetail from './components/EpisodeDetail';
import About from './pages/About';
import Subscribe from './pages/Subscribe';
import Advertise from './pages/Advertise';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Guests from './pages/Guests';
import { createURL } from './utils';
import './css/App.css';
import './css/Footer.css';
import episodesData from './content/episodes.json';

const App = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setEpisodes(episodesData);
  }, []);
  
  return (
    <Router>
      <div className="app">
        <header className="header">
          <Link to="/"><img src="/logo.svg" alt="Front End Happy Hour" className="logo" /></Link>
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
            <Route path="/guests" element={<Guests />} />
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
