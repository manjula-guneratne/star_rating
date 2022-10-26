import React from "react";
import Colour from "./Colour";

function ColourList({
  colours = [],
  onRemoveColour = (f) => f,
  onRateColour = (f) => f,
}) {
  if (!colours.length) return <div>No Colours listed. (Add a colour)</div>;

  return (
    <div className="colour-list">
      {colours.map((colour) => (
        <Colour
          key={colour.id}
          {...colour}
          onRemove={onRemoveColour}
          onRate={onRateColour}
        />
      ))}
    </div>
  );
}

export default ColourList;
