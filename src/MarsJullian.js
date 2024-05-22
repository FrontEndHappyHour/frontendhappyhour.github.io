import React from 'react';
import './PanelistBio.css';

const MarsJullian = () => {
  return (
    <div className="panelist-bio">
      <h1>Mars Jullian</h1>
      <img src="path_to_image/mars.jpg" alt="Mars Jullian" className="panelist-bio-image" />
      <p>Mars Jullian is a front end engineer at Evernote. She has a passion for building beautiful and accessible web applications.</p>
      <a href="/" className="back-link">Back to About</a>
    </div>
  );
};

export default MarsJullian;
