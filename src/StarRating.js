import React from "react";
import {FaStar} from "react-icons/fa";

function StarRating({ totalStars = 5 }){  //5 stars is pre-set here

    const Star = ({ selected = false}) => (
        <FaStar color={selected ? "red": "grey"} />
    )
    const createArray = length => [...Array(length)];

    console.log('CreateArray lengh = '+createArray);

    return createArray(totalStars).map((n,i) => <Star key={i} />);
}
 
export default StarRating;