import React from 'react';
import './PanelistBio.css';

const JemYoung = () => {
  return (
    <div className="panelist-bio">
      <h1>Jem Young</h1>
      <img src="path_to_image/jem.jpg" alt="Jem Young" className="panelist-bio-image" />
      <p>Jem Young is a senior software engineer at Netflix. He enjoys working on front end technologies and is passionate about creating great user experiences.</p>
      <a href="/" className="back-link">Back to About</a>
    </div>
  );
};

export default JemYoung;
