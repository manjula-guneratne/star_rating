import React, { useState } from "react";

function StarRating({ totalStars = 5, style = {} }) {

  const [selectedStars, setSelectedStars] = useState(0);

  const createArray = (length) => [...Array(length)];
  
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

export default StarRating;
