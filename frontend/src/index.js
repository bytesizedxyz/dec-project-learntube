import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import App from "./App";

const theme = {
  darkBlue: "#224259",
  lightBlue: "#00FFF0",
  white: "#FCFCFC",
  grey: "#C4BDC7",
  backgroundGrey: "#FBF2FF",
  extraSmallText: "8px",
  smallText: "12px",
  medText: "16px",
  largeText: "24px",
  extraLargeText: "48px",
  headerHeight: "100px",
  sidebarWidth: "220px",
  cardWidth: "280px",
  cardHeight: "80px"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
