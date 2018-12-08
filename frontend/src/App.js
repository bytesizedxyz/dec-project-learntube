import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "./pages/LandingPage";
import VideoPage from "./pages/VideoPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <LandingPage path="/" />
        <VideoPage path="/play-video" />
      </Router>
    );
  }
}

export default App;
