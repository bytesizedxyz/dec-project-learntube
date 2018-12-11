import styled from "styled-components";

export const BlurredBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #333;
  opacity: 0.7;
`;

export const AboveModalContainer = styled.div`
  position: relative;
  // Necessary so that it appears above the BlurredBackground;
  z-index: 9001;
  h3 {
    font-size: 3rem;
    font-family: "Bangers", cursive;
  }
`;
