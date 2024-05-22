import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EpisodeDetail.css'; // Import the CSS file for styling

// EpisodeDetail component to display detailed information about an episode
const EpisodeDetail = ({ episode }) => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Check if the episode prop is provided, if not display an error message
  if (!episode) {
    return <div>Episode not found</div>;
  }

  // Dynamically import the transcript using the episode number
  const transcriptModule = require(`./transcripts/${episode.episode}.js`);
  const transcript = transcriptModule();

  return (
    <div className="episode-detail">
      <h1>{episode.title}</h1>
      <p className="episode-published">Published on: {episode.published}</p>
      <p>{episode.description}</p>

      {/* Display panel members */}
      <div className="episode-panel">
        <h2>Panel</h2>
        <ul>
          {episode.panel.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>

      {/* Display guests with Twitter links */}
      <div className="episode-guests">
        <h2>Guests</h2>
        <ul>
          {episode.guests.map((guest, index) => (
            <li key={index}>
              {guest.name} {guest.twitter && (
                <a href={`https://twitter.com/${guest.twitter}`} target="_blank" rel="noopener noreferrer">
                  @{guest.twitter}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Display picks with links */}
      <div className="episode-picks">
        <h2>Picks</h2>
        <ul>
          {episode.picks.map((pick, index) => (
            <li key={index}>
              <a href={pick.url} target="_blank" rel="noopener noreferrer">{pick.title}</a> - {pick.from}
            </li>
          ))}
        </ul>
      </div>

      {/* Display additional links */}
      <div className="episode-links">
        <h2>Links</h2>
        <ul>
          {episode.links.map((link, index) => (
            <li key={index}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a></li>
          ))}
        </ul>
      </div>

      {/* Embed YouTube and SoundCloud iframes */}
      <div className="episode-embeds">
        <div className="youtube-embed">
          <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${episode.vid}`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="soundcloud-embed">
          <iframe 
            width="100%" 
            height="166" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${episode.id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false`}>
          </iframe>
        </div>
      </div>

      {/* Display transcript */}
      <div className="episode-transcript">
        <h2>Transcript</h2>
        <div dangerouslySetInnerHTML={{ __html: transcript }} />
      </div>

      {/* Button to navigate back to the home page */}
      <button onClick={() => navigate('/')} className="back-link">Back to Home</button>
    </div>
  );
};

export default EpisodeDetail;
