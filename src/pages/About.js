import React from 'react';
import '../css/About.css'; // Import the CSS file
import SubscribeList from '../components/SubscribeList'; // Import the SubscribeList component
import { PanelistList } from '../components/Panelist'; // Import the PanelistList component

const About = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <div className="about-content">
        <p>
        Front End Happy Hour is a podcast where a panel of seasoned software engineers from Silicon Valley companies like Netflix, LinkedIn, Microsoft, Twitch, and Atlassian come together to discuss a wide array of topics related to front end development, technology, and the ever-evolving culture of programming. Our discussions range from the latest in tech trends and best practices to personal experiences and industry insights.

        </p>
        <p>
        We bring a unique blend of technical expertise and personal anecdotes, offering valuable perspectives for developers at all stages of their careers. Whether you're looking to stay updated on the latest in front end development, seeking advice on navigating the tech industry, or just wanting to hear some entertaining stories from fellow engineers, Front End Happy Hour has something for you.
        </p>
        <p>
        Join us for engaging conversations, insightful discussions, and a bit of fun as we share our passion for technology and frontend development.
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
              title="Front End Happy Hour podcast audio trailer"
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
          <PanelistList />
        </div>
      </div>
    </div>
  );
};

export default About;
