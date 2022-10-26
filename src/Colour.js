import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

function Colour({
  id,
  title,
  colour,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
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
