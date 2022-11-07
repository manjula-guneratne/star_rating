import React, { createContext, useState } from "react";
import ColourData from "./colour-data.json";

const ColourContext = createContext();

function ColourProvider({ children }) {
  const [colours, setColours] = useState(ColourData);

  const addColour = (title, colour) => setColours([...colours])
  return (
    <ColourContext.Provider value={{ colours, setColours }}>
      {children}
    </ColourContext.Provider>
  );
};

export default ColourProvider;
