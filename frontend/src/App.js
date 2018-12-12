import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "./pages/LandingPage";
import VideoPage from "./pages/VideoPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";
import LearnTubeLogo from "./resources/learntube.svg";
import PernHubLogo from "./resources/pernhub.svg";

import styled from "styled-components";

const Img = styled.img`
  width: 24rem;
`;

class Logo extends React.Component {
  state = {
    pg: true
  };

  render() {
    return (
      <div>
        {this.state.pg ? (
          <Img src={LearnTubeLogo} />
        ) : (
          <Img src={PernHubLogo} />
        )}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <LandingPage path="/" />
          <VideoPage path="/play-video" />
          <DashboardPage path="/dashboard" />

        </Router>
      </div>
    );
  }
}

export default App;
