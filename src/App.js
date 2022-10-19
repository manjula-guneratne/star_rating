import React from "react";
import StarRating from "./StarRating";

function App() {
  return (
    <StarRating
      totalStars={10}
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={(e) => alert("double clicked!")}
    />
  );
}

export default App;
