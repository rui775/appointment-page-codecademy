import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({ tileCards }) => {
  return (
    <div>
      {tileCards.length > 0 ? (
        tileCards.map((tileCard, index) => {
          const { name, ...rest } = tileCard;
          return <Tile name={name} description={rest} key={index} />;
        })
      ) : (
        <p className="tile">No Contacts</p>
      )}
    </div>
  );
};