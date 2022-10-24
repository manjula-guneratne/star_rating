import React from "react";
import StarRating from "./StarRating";

function Colour({title, colour, rating}){    

    return(
        <section>
            <h1>{title}</h1>
            <div style={{height: 50, backgroundColor: colour}} />
            <StarRating selectedStars={rating} />
        </section>
    );
}

export default Colour;