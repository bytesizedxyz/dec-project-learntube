import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "./pages/LandingPage";
import VideoUploadPage from "./pages/VideoUploadPage";
import "./App.css";
import LearnTubeLogo from "./resources/learntube.svg";
import PernHubLogo from "./resources/pernhub.svg";
import Header from "./shared-components/header";

import styled from "styled-components";



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Router>
          
          <LandingPage path="/" />
          <VideoUploadPage path="/video/upload" />
        </Router>
      </div>
    );
  }
}

export default App;
