import React from "react";
import { useParams, Redirect } from "react-router-dom";

import ColorDetails from "./ColorDetails";
// import "./FilteredColorDetails.css";


function FilteredColorDetails ({colors}) {
    const {color} = useParams();
    const colorMatch = colors.find(col => col.urlName === color);

    if (!colorMatch) {
        return <Redirect to="/colors"/>
    }

    return <ColorDetails color={colorMatch}/>
}


export default FilteredColorDetails;
