import React from "react";

export const Tile = ({ name, description }) => {

  // console.log(description)
  return (
    <div className="tile-container">
      <p className="tile-tile" role="heading" aria-level="2">{name}</p>
      {Object.entries(description).map(([key, value]) => <p className="tile" key={key}>{value}</p>)}
    </div>
  );
};