import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import HomePage from "./HomePage";
import NewColorForm from "./NewColorForm";
import ColorDetails from "./ColorDetails";


function Routes () {
    return (
        <Switch>
            <Route exact path="/colors">
                <HomePage />
            </Route>

            <Route exact path="/colors/new">
                <NewColorForm />
            </Route>

            <Route exact path="/colors/:color">
                <ColorDetails />
            </Route>

            <Redirect to="/colors"/>
        </Switch>
    )
}


export default Routes;
