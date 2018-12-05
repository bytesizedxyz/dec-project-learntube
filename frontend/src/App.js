import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import LandingPage from "./pages/LandingPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <LandingPage path="/" />
      </Router>
    );
  }
}

export default App;
