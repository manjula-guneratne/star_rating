import React from "react";
import { createArray } from "./lib";
import Star from "./Star";

function StarRating({ totalStars = 5, selectedStars = 1}) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

export default StarRating;
