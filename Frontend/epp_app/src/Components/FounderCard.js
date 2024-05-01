import React from "react";

const FounderCard = ({ founder }) => {
  return (
    <div className="founder-card">
      <img src={founder.image} alt={founder.name} />
      <div className="info">
        <h4>{founder.name}</h4>
        <p>{founder.position}</p>
        <p>{founder.bio}</p>
      </div>
    </div>
  );
};

export default FounderCard;
