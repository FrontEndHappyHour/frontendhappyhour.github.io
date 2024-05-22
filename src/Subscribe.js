import React from 'react';
import './Subscribe.css'; // Import the CSS file

const Subscribe = () => {
  return (
    <div className="subscribe-page">
      <h1>Subscribe</h1>
      <div className="subscribe-content">
        <p>You can subscribe to the Front End Happy Hour podcast through these links:</p>
        <ul>
          <li><a href="https://www.apple.com/itunes/podcasts/" target="_blank" rel="noopener noreferrer">Apple Podcasts</a></li>
          <li><a href="https://play.google.com/music/listen?u=0#/ps/It4bq2hyixqu4dc3xk5zj2mfcfy" target="_blank" rel="noopener noreferrer">Google Play</a></li>
          <li><a href="https://open.spotify.com/show/4MwD9gi1gR0Gx8v0zS3yWJ" target="_blank" rel="noopener noreferrer">Spotify</a></li>
          <li><a href="http://www.stitcher.com/s?fid=85613&refid=stpr" target="_blank" rel="noopener noreferrer">Stitcher</a></li>
          <li><a href="https://overcast.fm/itunes1092759075" target="_blank" rel="noopener noreferrer">Overcast</a></li>
          <li><a href="https://www.google.com/podcasts?feed=aHR0cDovL2ZlZWhwLmxpYnN5bi5jb20vcnNz" target="_blank" rel="noopener noreferrer">Google Podcasts</a></li>
          <li><a href="http://www.feeder.co/" target="_blank" rel="noopener noreferrer">Feeder</a></li>
          <li><a href="https://www.pocketcasts.com/" target="_blank" rel="noopener noreferrer">Pocket Casts</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Subscribe;
