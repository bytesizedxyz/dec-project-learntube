import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "./pages/LandingPage";
import VideoPage from "./pages/VideoPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";
import LearnTubeLogo from "./resources/learntube.svg";
import PernHubLogo from "./resources/pernhub.svg";
import Header from "./shared-components/header";
import { Provider } from "react-redux";
import store from "./state";

import styled from "styled-components";


const Img = styled.img`
  width: 40rem;
`;


// once we connect the redux store to App.
// We can pass down the user's authentication status
// as a prop to the Header component.
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        
        <Header />
        <Router>
          <LandingPage path="/" />
          <VideoPage path="/play-video" />
          <DashboardPage path="/dashboard" />
        </Router>
      </Provider>
    );
  }
}

export default App;
