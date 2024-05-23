import React from "react";

export const Tile = ({ name, phone, email }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      <p className="tile">{phone}</p>
      <p className="tile">{email}</p>
    </div>
  );
};
