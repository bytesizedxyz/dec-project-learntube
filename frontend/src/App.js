import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";
import LearnTubeLogo from "./resources/learntube.svg";
import PernHubLogo from "./resources/pernhub.svg";
import Header from "./shared-components/header";
import { Provider } from "react-redux";
import store from "./state";

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
      <Provider store={store}>
        <Logo />
        <Header />
        <Router>
          <LandingPage path="/" />
          <DashboardPage path="/dashboard" />
        </Router>
      </Provider>
    );
  }
}

export default App;
