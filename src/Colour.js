import React from "react";
import StarRating from "./StarRating";
import { useColours } from "./colour-hooks ";

function Colour({
  id,
  title,
  colour,
  rating,
}) {
  const { rateColour, removeColour} = useColours();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        X
      </button>
      <div style={{ height: 50, backgroundColor: colour }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
}

export default Colour;
