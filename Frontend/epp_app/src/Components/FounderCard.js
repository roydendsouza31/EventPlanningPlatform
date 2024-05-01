import React from 'react';
import '../styles/foundercard.css';

const FounderCard = ({ founder }) => {
  return (
    <div className="founder-card">
      <img src={founder.image} alt={founder.name} />
      <div className="info">
        <h4>{founder.name}</h4>
        <p>{founder.position}</p>
        <p>{founder.address}</p>
      </div>
    </div>
  );
};

export default FounderCard;
