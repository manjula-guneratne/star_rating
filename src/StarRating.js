import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ totalStars = 5, style = {} }) {
  //5 stars is pre-set here

  const [selectedStars, setSelectedStars] = useState(0);

  const Star = ({ selected = false, onSelect = (f) => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  );
  const createArray = (length) => [...Array(length)];

  return (
    <>
      <div style={{ padding: "5px", ...style }}>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
        <p>
          {selectedStars} of {totalStars} stars
        </p>
      </div>
    </>
  );
}

export default StarRating;
