import React from "react";
import styled from "styled-components";
import Sidebar from "./class-components/sidebar";
import PlaylistListing from "./class-components/playlist-listing";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.headerHeight})`};
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
