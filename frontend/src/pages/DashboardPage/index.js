import React from "react";
import styled from "styled-components";
import Sidebar from "./class-components/sidebar";

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const PlaceHolderVideoListingDiv = styled.div`
  width: 100%;
  height: 100%;
  background: lime;
`;

const index = () => {
  return (
    <Main>
      <Sidebar />
      <PlaceHolderVideoListingDiv />
    </Main>
  );
};

export default index;

// ***** Page Structure *****
// Main
//  - Header Component
//  - Sidebar Component
//    - Video Upload Btn/Link
//    - Account options?
//  - Video Listing COmponent
