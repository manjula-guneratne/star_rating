import React, {useState} from "react";
import colourData from "./colour-data.json";
import ColourList from "./ColourList.js";


function App() {
    const [colours] = useState(colourData);
    return <ColourList colours={colours} />;
}

export default App;
