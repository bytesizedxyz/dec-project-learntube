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
