import React from "react";

import AddColorBanner from "./AddColorBanner";
import ColorList from "./ColorList";
import "./HomePage.css";


function HomePage ({colors}) {

    return (
        <div className="HomePage">
            <AddColorBanner />

            <div className="HomePage-color-select">
                <p>Please select a color:</p>
                <ColorList colors={colors}/>
            </div>

        </div>
    )
}


export default HomePage;
