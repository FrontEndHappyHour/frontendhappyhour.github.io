import React from 'react';
import './About.css'; // Import the CSS file

const panelists = [
  {
    name: 'Ryan Burgess',
    image: 'path_to_image/ryan.jpg',
    bioLink: '/panelists/ryan-burgess',
  },
  {
    name: 'Jem Young',
    image: 'path_to_image/jem.jpg',
    bioLink: '/panelists/jem-young',
  },
  {
    name: 'Stacy London',
    image: 'path_to_image/stacy.jpg',
    bioLink: '/panelists/stacy-london',
  },
  {
    name: 'Brian Holt',
    image: 'path_to_image/brian.jpg',
    bioLink: '/panelists/brian-holt',
  },
  {
    name: 'Mars Jullian',
    image: 'path_to_image/mars.jpg',
    bioLink: '/panelists/mars-jullian',
  },
  // Add more panelists as needed
];

const About = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <div className="about-content">
        <p>
          Welcome to Front End Happy Hour! We’re a podcast where a group of front end developers
          discuss a range of topics pertaining to front end development, while enjoying a few
          drinks. Each episode, we have a casual discussion about front end development, technology,
          and the culture of programming.
        </p>
        <p>
          Our panelists include engineers from companies like Netflix, LinkedIn, Atlassian, and
          Evernote. We also occasionally have guests from other companies join our discussions.
        </p>
        <p>
          We hope you enjoy the show! Cheers!
        </p>
        <div className="trailer">
          <h2>Podcast Trailer</h2>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/BsFbkUv8P4g" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="team">
          <h2>Meet the Team</h2>
          <div className="panelists">
            {panelists.map((panelist, index) => (
              <div key={index} className="panelist">
                <a href={panelist.bioLink}>
                  <img src={panelist.image} alt={panelist.name} className="panelist-image" />
                </a>
                <h3>{panelist.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
