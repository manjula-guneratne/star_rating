import React, {useState} from "react";
import colourData from "./colour-data.json";
import ColourList from "./ColourList.js";

function App() {
    const [colours] = useState(colourData);
    return <ColourList colors={colours} />;
}

export default App;
