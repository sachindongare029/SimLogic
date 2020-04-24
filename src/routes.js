import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Inventory from './Inventory';

const Routes = () => (
  <React.Fragment>
    <Route exact path={"/"} component={Dashboard} />
    <Route exact path={"/inventory"} component={Inventory} />
  </React.Fragment>
);

export default Routes;
