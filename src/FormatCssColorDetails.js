import React from "react";
import { useParams, Redirect } from "react-router-dom";

import ColorDetails from "./ColorDetails";
// import "./FormatCssColorDetails.css";


function FormatCssColorDetails ({colors}) {
    const {color} = useParams();
    const colorMatch = colors.find(col => col.cssName === color);

    if (!colorMatch) {
        return <Redirect to="/colors"/>
    }

    return <ColorDetails color={colorMatch}/>
}


export default FormatCssColorDetails;
