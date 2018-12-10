import React from "react";
import styled from "styled-components";
import VideoUpload from "./class-components/video-upload";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const index = () => {
  return (
    <Main>
      <VideoUpload />
    </Main>
  );
};

export default index;
