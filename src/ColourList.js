import React from "react";
import { useColours } from "./colour-hooks";
import Colour from "./Colour";

function ColourList() {
  const { colours } = useColours();
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
