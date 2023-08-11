import React from "react";
import { Link } from "react-router-dom";

import "./AddColorBanner.css";


function AddColorBanner () {

    return (
        <div className="AddColorBanner">

            <h1 className="AddColorBanner-heading">Welcome to the Color Factory.</h1>

            <Link to="/colors/new">
                Add a color
            </Link>

        </div>
    )
}


export default AddColorBanner;
