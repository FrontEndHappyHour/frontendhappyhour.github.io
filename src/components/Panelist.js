import React from 'react';
import '../css/Panelist.css'; // Import the CSS file for panelist
import panelists from '../content/panel.json'; // Import the JSON file

const Panelist = ({ name, image }) => {
  return (
    <div className="panelist">
        <img src={image} alt={name} className="panelist-image" />
        <h3>{name}</h3>
    </div>
  );
};

export const PanelistList = () => {
  return (
    <div className="panelists">
      {panelists.filter(panelist => panelist.active).map((panelist, index) => (
        <Panelist 
          key={index} 
          name={panelist.name} 
          image={panelist.image} 
        />
      ))}
    </div>
  );
};

export default Panelist;
