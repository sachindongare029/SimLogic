import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Inventory from './Inventory';

const Routes = () => (
  <div className="main__section container">
    <Route exact path={"/"} component={Dashboard} />
    <Route exact path={"/inventory"} component={Inventory} />
  </div>
);

export default Routes;
