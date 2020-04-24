import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
// import About from './components/About';

const Routes = () => (
  <React.Fragment>
    <Route exact path={"/"} component={Dashboard} />
    {/* <Route exact path={"/about"} component={About} /> */}
  </React.Fragment>
);

export default Routes;
