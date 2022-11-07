import React from "react";
import ColourList from "./ColourList.js";
import AddColourForm from "./AddColourForm";

function App() {
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
      <AddColourForm />
      <ColourList />
    </>
  );
}

export default App;
