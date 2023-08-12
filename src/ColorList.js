import React from "react";
import { Link } from "react-router-dom";

import "./ColorList.css";


function ColorList ({colors}) {

    return (
        <div className="ColorList">
            <ul>
                {
                    colors.map(({fullName, cssName}, ind) => {
                        return (
                            <li key={ind}>
                                <Link to={`/colors/${cssName}`}>
                                    {fullName}
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
