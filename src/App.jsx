/* eslint-disable */

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import About from "./containers/About/About.jsx";
import NavBar from "./components/layout/NavBar.jsx";
import LandingPage from "./containers/LandingPage/LandingPage";
import Projects from "./containers/Projects/Projects.jsx";

class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/pothier/" component={Projects} />
          <Route path="/pothier/home" component={LandingPage} />
          <Route path="/pothier/about" component={About} />
          <Route path="/pothier/projects" component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default App;
