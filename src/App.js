import React, { useState } from "react";
import colourData from "./colour-data.json";
import ColourList from "./ColourList.js";
import AddColourForm from "./AddColourForm";
import { v4 } from "uuid";

function App() {
  const [colours, setColours] = useState(colourData);

  // const removeColour = id => {
  //   const newColours = colours.filter(colour => colour.id !== id);
  //   setColours(newColours);
  // };

  // const rateColour = (id, rating) => {
  //   const newColours = colours.map(colour => colour.id === id ? {...colour, rating} : colour);
  //   setColours(newColours);
  // };

  return (
    <>
      <AddColourForm
        onNewColour={(title, colour) => {
          const newColours = [
            ...colours,
            {
              id: v4(),
              rating: 0,
              title,
              colour,
            },
          ];
          setColours(newColours);
        }}
      />
      <ColourList />
    </>
  );
}

export default App;
