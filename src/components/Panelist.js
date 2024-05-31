import React from 'react';
import '../css/Panelist.css'; // Import the CSS file for panelist

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

const Panelist = ({ name, image, bioLink }) => {
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
      {panelists.map((panelist, index) => (
        <Panelist 
          key={index} 
          name={panelist.name} 
          image={panelist.image} 
          bioLink={panelist.bioLink} 
        />
      ))}
    </div>
  );
};

export default Panelist;
