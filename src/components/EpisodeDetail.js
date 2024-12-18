import React, { useState, useEffect } from 'react';
import '../css/EpisodeDetail.css'; // Import the CSS file for styling
import panelistsData from '../content/panel.json'; // Import the JSON file
import { createURL } from '../utils';
import { setMetaTags } from '../setMetaTags';

const EpisodeDetail = ({ episode }) => {
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (episode) {
      import(`../transcripts/${episode.episode}.js`)
        .then((module) => setTranscript(module.default))
        .catch((error) => console.error('Error loading transcript:', error));
      
      setMetaTags({
        title: episode.title,
        description: episode.description,
        image: `https://frontendhappyhour.com/img/episodes/friendly-preview/${createURL(episode.title)}.jpeg`,
        url: `https://frontendhappyhour.com/episodes/${createURL(episode.title)}`
      });
    }
  }, [episode]);

  // Check if the episode prop is provided, if not display an error message
  if (!episode) {
    return <div>Episode not found</div>;
  }

  // Find panelists who are part of the episode
  const episodePanelists = panelistsData.filter(panelist => 
    episode.panel.includes(panelist.name)
  );

  // Function to get guest image URL
  // if the guest has a twitter account the image is saved as their username .jpg
  // if the guest doesn't have twitter the image is saved as their first-lastname.jpg lowercase
  const getGuestImageUrl = (guest) => {
    if (guest.twitter) {
      return `/img/guests/${guest.twitter}.jpg`;
    }
    return `/img/guests/${guest.name.toLowerCase().replace(/ /g, '-')}.jpg`;
  };

  return (
    <div className="episode-detail">
      <h1>{episode.title}</h1>
      <p className="episode-published">Published on: {episode.published}</p>
      <p>{episode.description}</p>

      {/* Embed YouTube and SoundCloud iframes */}
      <div className="episode-embeds">
        {episode.vid && (
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
        )}
        <div className="soundcloud-embed">
          <iframe 
            width="100%" 
            height="166" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            title="Episode audio" 
            src={`https://podcasters.spotify.com/pod/show/ryan-burgess7/embed/episodes/${episode.id}`}>
          </iframe>
        </div>
      </div>
      {/* Conditionally render guests section with images */}
      {episode.guests && episode.guests.length > 0 && (
        <div className="episode-guests">
          <h2>Guests</h2>
          <ul className="guest-members">
            {episode.guests.map((guest, index) => (
              <li key={index} className="guest">
                <a href={guest.twitter ? `https://twitter.com/${guest.twitter}` : '#'} target="_blank" rel="noopener noreferrer">
                  <img src={getGuestImageUrl(guest)} alt={guest.name} className="guest-image" />
                  <p>{guest.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display panel members with images */}
      <div className="episode-panel">
        <h2>Panel</h2>
        <ul className="panel-members">
          {episodePanelists.map((panelist, index) => (
            <li key={index} className="panelist">
              <a href={`https://twitter.com/${panelist.twitter}`} target="_blank" rel="noopener noreferrer">
                <img src={panelist.image} alt={panelist.name} className="panelist-image" />
                <p>{panelist.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Conditionally render picks section */}
      {episode.picks && episode.picks.length > 0 && (
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
      )}

      {/* Conditionally render links section */}
      {episode.links && episode.links.length > 0 && (
        <div className="episode-links">
          <h2>Links</h2>
          <ul>
            {episode.links.map((link, index) => (
              <li key={index}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a></li>
            ))}
          </ul>
        </div>
      )}

      {/* Conditionally render transcript section */}
      {transcript && (
        <div className="episode-transcript">
          <h2>Transcript</h2>
          <a href={`https://github.com/FrontEndHappyHour/frontendhappyhour.github.io/blob/main/transcripts/${episode.episode}.js`} className='edit-transcript'>Edit transcript</a>
          <div dangerouslySetInnerHTML={{ __html: transcript }} />
        </div>
      )}
    </div>
  );
};

export default EpisodeDetail;
