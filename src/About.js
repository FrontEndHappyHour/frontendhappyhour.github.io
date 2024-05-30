import React from 'react';
import './About.css'; // Import the CSS file
import SubscribeList from './SubscribeList'; // Import the SubscribeList component


const panelists = [
  {
    name: 'Ryan Burgess',
    image: '../img/panel/burgessdryan.jpg',
    bioLink: '/panelists/ryan-burgess',
  },
  {
    name: 'Jem Young',
    image: '../img/panel/JemYoung.jpg',
    bioLink: '/panelists/jem-young',
  },
  {
    name: 'Stacy London',
    image: '../img/panel/stacylondoner.jpg',
    bioLink: '/panelists/stacy-london',
  },
  {
    name: 'Augustus Yuan',
    image: '../img/panel/augburto.jpg',
    bioLink: '/panelists/augustus-yuan',
  },
  {
    name: 'Shirley Wu',
    image: '../img/panel/sxywu.jpg',
    bioLink: '/panelists/shirley-wu',
  },
  {
    name: 'Cole Turner',
    image: '../img/panel/cole.jpg',
    bioLink: '/panelists/cole-turner',
  }
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
          <h2>Trailer</h2>
          <div className="audio">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1386003292&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div
              style={{
                fontSize: '10px',
                color: '#cccccc',
                lineBreak: 'anywhere',
                wordBreak: 'normal',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
                fontWeight: 100,
              }}
            >
              <a
                href="https://soundcloud.com/front-end-happy-hour"
                title="Front End Happy Hour"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#cccccc', textDecoration: 'none' }}
              >
                Front End Happy Hour
              </a>{' '}
              ·{' '}
              <a
                href="https://soundcloud.com/front-end-happy-hour/front-end-happy-hour-podcast-trailer"
                title="Front End Happy Hour Podcast Trailer"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#cccccc', textDecoration: 'none' }}
              >
                Front End Happy Hour Podcast Trailer
              </a>
            </div>
          </div>
        </div>
        <div className='subscribe'>
          <h2>Subscribe</h2>
          <SubscribeList />
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
