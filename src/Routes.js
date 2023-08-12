import React, {useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import HomePage from "./HomePage";
import NewColorForm from "./NewColorForm";
import FormatCssColorDetails from "./FormatCssColorDetails";
import formatCssColorName from "./helpers/formatCssColorName";


function Routes () {

    const TEST_COLORS = [
        {
            fullName: "Cyan",
            cssName: "cyan"
        },
        {
            fullName: "Dark orchid",
            cssName: "darkorchid"
        },
        {
            fullName: "Lawn green",
            cssName: "lawngreen"
        },
        {
            fullName: "Orange red",
            cssName: "orangered"
        }
    ];

    const [colors, setColors] = useState(TEST_COLORS);

    // Add a new color entry to list in state.
    const addColor = (fullCol) => {
        setColors(colors => {
            const updatedColors = colors.map(color => {
                return {...color}
            });

            updatedColors.push(
                {
                    fullName: fullCol,
                    cssName: formatCssColorName(fullCol)
                }
            );

            return updatedColors;
        });
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
                <FormatCssColorDetails colors={colors}/>
            </Route>

            <Redirect to="/colors"/>
        </Switch>
    )
}


export default Routes;
