import React, { useContext } from "react";
import { ColourContext } from ".";
import Colour from "./Colour";

function ColourList() {
  const { colours } = useContext(ColourContext);
  if (!colours.length) return <div>No Colours listed. (Add a colour)</div>;

  return (
    <div className="colour-list">
      {colours.map((colour) => (
        <Colour key={colour.id} {...colour} />
      ))}
    </div>
  );
}

export default ColourList;
