import React from "react";

import AddColorBanner from "./AddColorBanner";
import ColorList from "./ColorList";
import "./HomePage.css";


function HomePage () {

    return (
        <div className="HomePage">
            <AddColorBanner />

            <p>Please select a color:</p>
            <ColorList />

        </div>
    )
}


export default HomePage;
