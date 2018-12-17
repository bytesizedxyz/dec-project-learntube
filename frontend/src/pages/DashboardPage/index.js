import React from "react";
import styled from "styled-components";
import Sidebar from "./class-components/sidebar";
import PlaylistListing from "./class-components/playlistListing";

const Container = styled.div`
  display: flex;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const PlaceHolderVideoListingDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #fcfcfc;
`;

const index = () => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <PlaylistListing />
      </Main>
    </Container>
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
