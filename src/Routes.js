import React, {useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import HomePage from "./HomePage";
import NewColorForm from "./NewColorForm";
import FilteredColorDetails from "./FilteredColorDetails";
import formatUrlColorName from "./helpers/formatUrlColorName";


function Routes () {

    const TEST_COLORS = [
        {
            fullName: "Cyan",
            urlName: "cyan",
            value: "cyan"
        },
        {
            fullName: "Dark orchid",
            urlName: "darkorchid",
            value: "darkorchid"
        },
        {
            fullName: "Lawn green",
            urlName: "lawngreen",
            value: "lawngreen"
        },
        {
            fullName: "Orange red",
            urlName: "orangered",
            value: "orangered"
        }
    ];

    const [colors, setColors] = useState(TEST_COLORS);

    // Add a new color entry to list in state.
    const addColor = ({colorName, colorValue}) => {
        const newColor = {
            fullName: colorName,
            urlName: formatUrlColorName(colorName),
            value: colorValue
        }

        setColors(colors => [...colors, newColor]);
    };

    return (
        <Switch>
            <Route exact path="/colors">
                <HomePage colors={colors}/>
            </Route>

            <Route exact path="/colors/new">
                <NewColorForm addColor={addColor}/>
            </Route>

            <Route exact path="/colors/:color">
                <FilteredColorDetails colors={colors}/>
            </Route>

            <Redirect to="/colors"/>
        </Switch>
    )
}


export default Routes;
