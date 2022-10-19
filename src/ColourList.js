import React from "react";
import Colour from "./Colour";

function ColourList({ colours = [] }) {
  if (!colours.length) return <div>No Colours listed. (Add a colour)</div>;
  return (
    <div>
      {colours.map((colour) => (
        <Colour key={colour.id} {...colour} />
      ))}
    </div>
  );
}

export default ColourList;