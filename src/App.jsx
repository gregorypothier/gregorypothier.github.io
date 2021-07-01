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
          <Route exact path="/" component={Projects} />
          <Route path="/home" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default App;
