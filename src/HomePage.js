import React from "react";

import AddColorBanner from "./AddColorBanner";
import ColorList from "./ColorList";
import "./HomePage.css";


function HomePage () {

    const initColors = ["Cyan", "Dark orchid", "Lawn green", "Orange red"];

    return (
        <div className="HomePage">
            <AddColorBanner />

            <p>Please select a color:</p>
            <ColorList colors={initColors}/>

        </div>
    )
}


export default HomePage;
