import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";
import LearnTubeLogo from "./resources/learntube.svg";
import PernHubLogo from "./resources/pernhub.svg";

import styled from "styled-components";

const Img = styled.img`
  width: 40rem;
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

// once we connect the redux store to App.
// We can pass down the user's authentication status
// as a prop to the Header component.
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <LandingPage path="/" />
          <DashboardPage path="/dashboard" />
        </Router>
      </div>
    );
  }
}

export default App;
