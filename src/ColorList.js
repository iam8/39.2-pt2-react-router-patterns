import React from "react";
import { Link } from "react-router-dom";

import "./ColorList.css";


function ColorList ({colors}) {

    return (
        <div className="ColorList">
            <ul className="ColorList-list">
                {
                    colors.map(({fullName, urlName}, ind) => {
                        return (
                            <li key={ind}>
                                <Link to={`/colors/${urlName}`}>
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
