import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
// import About from './components/About';

const Routes = () => (
  <React.Fragment>
    <main className="main">
      <Route exact path={"/"} component={Dashboard} />
      {/* <Route exact path={"/about"} component={About} /> */}
    </main>
  </React.Fragment>
);

export default Routes;
