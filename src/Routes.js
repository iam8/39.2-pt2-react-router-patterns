import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";


function Routes () {
    return (
        <Switch>
            <Route exact to="/colors">

            </Route>

            <Route exact to="/colors/new">

            </Route>

            <Route exact to="/colors/:color">

            </Route>

            <Redirect to="/colors"/>

        </Switch>
    )
}


export default Routes;
