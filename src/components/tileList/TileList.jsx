import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {

  console.log(list);
  return (
    <div>
      {list.length > 0 ? (
        list.map((item) => (
          <Tile
            name={item.name}
            phone={item.phone}
            email={item.email}
          />
        ))
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
};
