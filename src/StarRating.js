import React from "react";
import {FaStar} from "react-icons/fa";

function StarRating(){
    return[
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="grey" />,
        <FaStar color="grey" />
    ];
}
 
export default StarRating;