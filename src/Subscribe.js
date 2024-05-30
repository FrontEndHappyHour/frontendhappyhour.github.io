import React from 'react';
import SubscribeList from './SubscribeList'; // Import the SubscribeList component
import './Subscribe.css'; // Import the CSS file

const Subscribe = () => {
  return (
    <div className="subscribe-page">
      <h1>Subscribe</h1>
      <div className="subscribe-content">
        <p>The Front End Happy Hour podcast is available on all the great podcast services you like to listen to your podcasts on. Make sure to subscribe to get the latest episodes!</p>
        <SubscribeList />
      </div>
    </div>
  );
};

export default Subscribe;
