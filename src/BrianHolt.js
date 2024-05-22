import React from 'react';
import './PanelistBio.css';

const BrianHolt = () => {
  return (
    <div className="panelist-bio">
      <h1>Brian Holt</h1>
      <img src="path_to_image/brian.jpg" alt="Brian Holt" className="panelist-bio-image" />
      <p>Brian Holt is a senior software engineer at Microsoft. He has a strong background in front end development and loves contributing to open-source projects.</p>
      <a href="/" className="back-link">Back to About</a>
    </div>
  );
};

export default BrianHolt;
