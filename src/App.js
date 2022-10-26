import React, { useState } from "react";
import colourData from "./colour-data.json";
import ColourList from "./ColourList.js";

function App() {
  const [colours, setColours] = useState(colourData);

  const removeColour = id => {
    const newColours = colours.filter(colour => colour.id !== id);
    setColours(newColours);
  };

  const rateColour = (id, rating) => {
    const newColours = colours.map(colour => colour.id === id ? {...colour, rating} : colour);
    setColours(newColours);
  };

  return (
    <ColourList
      colours={colours}
      onRemoveColour={removeColour}
      onRateColour={rateColour}      
    />
  );
}

export default App;
