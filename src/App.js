import logo from "./logo.svg";
import "./App.css";

import { Fragment } from "react";

import { React, useState } from "react";

import Department from "./components/Department";
import Employee from "./components/Employee";

import Navbar from "./components/Navbar";

import { Switch, Route, Redirect, Link, BrowserRouter } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        {" "}
        <Navbar />
        <Switch>
          <Route exact path="/department" component={Department} />
          <Route exact path="/employee" component={Employee} />
          <Redirect to="/department" />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
