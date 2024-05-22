import React from 'react';
import './PanelistBio.css';

const RyanBurgess = () => {
  return (
    <div className="panelist-bio">
      <h1>Ryan Burgess</h1>
      <img src="path_to_image/ryan.jpg" alt="Ryan Burgess" className="panelist-bio-image" />
      <p>Ryan Burgess is a software engineering manager at Netflix. He is passionate about front end development and enjoys sharing his knowledge with the community.</p>
      <a href="/" className="back-link">Back to About</a>
    </div>
  );
};

export default RyanBurgess;
