import React from 'react';
import './PanelistBio.css';

const StacyLondon = () => {
  return (
    <div className="panelist-bio">
      <h1>Stacy London</h1>
      <img src="path_to_image/stacy.jpg" alt="Stacy London" className="panelist-bio-image" />
      <p>Stacy London is a front end engineer at LinkedIn. She is dedicated to improving the web and enjoys sharing her knowledge with the developer community.</p>
      <a href="/" className="back-link">Back to About</a>
    </div>
  );
};

export default StacyLondon;
