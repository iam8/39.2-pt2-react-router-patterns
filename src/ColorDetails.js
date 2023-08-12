import React from "react";
import { Link } from "react-router-dom";

import "./ColorDetails.css";


function ColorDetails ({color}) {

    const style = {
        backgroundColor: color.value
    };

    return (
        <div className="ColorDetails" style={style}>

            <div className="ColorDetails-text">
                This is {color.fullName.toLowerCase()}. Isn't it beautiful?
            </div>

            <div className="ColorDetails-homelink">
                <Link to="/colors">
                    Back to home
                </Link>
            </div>

        </div>
    )
}


export default ColorDetails;
