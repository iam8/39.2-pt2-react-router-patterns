import React from "react";
import { Link } from "react-router-dom";

import formatColorName from "./helpers/formatColorName";
import "./ColorList.css";


function ColorList ({colors}) {

    return (
        <div className="ColorList">
            <ul>
                {
                    colors.map((color, ind) => {
                        return (
                            <li key={ind}>
                                <Link to={`/colors/${formatColorName(color)}`}>
                                    {color}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}


export default ColorList;
