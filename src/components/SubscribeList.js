import React from 'react';
import '../css/SubscribeList.css'; // Import the CSS file

const SubscribeList = () => {
  return (
    <ul className="subscribe-list">
      <li>
        <a href="https://www.apple.com/itunes/podcasts/" target="_blank" rel="noopener noreferrer">
          <img src="../img/apple-podcasts.svg" alt="Apple Podcasts" />
          Apple Podcasts
        </a>
      </li>
      <li>
        <a href="https://open.spotify.com/show/4MwD9gi1gR0Gx8v0zS3yWJ" target="_blank" rel="noopener noreferrer">
          <img src="../img/spotify.svg" alt="Spotify" />
          Spotify
        </a>
      </li>
      <li>
        <a href="http://www.stitcher.com/s?fid=85613&refid=stpr" target="_blank" rel="noopener noreferrer">
          <img src="../img/stitcher.svg" alt="Stitcher" />
          Stitcher
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1092759075" target="_blank" rel="noopener noreferrer">
          <img src="../img/overcast.svg" alt="Overcast" />
          Overcast
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC7Z0tYI2QTPPsrQImkYiOSw" target="_blank" rel="noopener noreferrer">
          <img src="../img/youtube.svg" alt="YouTube" />
          YouTube
        </a>
      </li>
      <li>
        <a href="https://www.twitch.tv/frontendhappyhour" target="_blank" rel="noopener noreferrer">
          <img src="../img/twitch.svg" alt="Twitch" />
          Twitch
        </a>
      </li>
      <li>
        <a href="https://feeds.simplecast.com/54nAGcIl" target="_blank" rel="noopener noreferrer">
          <img src="../img/rss.svg" alt="RSS" />
          RSS
        </a>
      </li>
    </ul>
  );
};

export default SubscribeList;
