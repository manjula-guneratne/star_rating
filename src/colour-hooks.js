import React, { createContext, useState, useContext } from "react";
import ColourData from "./colour-data.json";

const ColourContext = createContext();
export const useColours = () => useContext(ColourContext);

function ColourProvider({ children }) {
  const [colours, setColours] = useState(ColourData);

  const addColour = (title, colour) =>
    setColours([
      ...colours,
      {
        id: v4(),
        rating: 0,
        title,
        colour,
      },
    ]);

  const rateColour = (id, rating) =>
    setColours(
      colours.map((colour) =>
        colour.id === id ? { ...colour, rating } : colour
      )
    );

  const removeColour = (id) =>
    setColours(colours.filter((colour) => colour.id !== id));

  return (
    <ColourContext.Provider
      value={{ colours, addColour, removeColour, rateColour }}
    >
      {children}
    </ColourContext.Provider>
  );
}

export default ColourProvider;
