import styled, { css } from "styled-components";

export const BlurredBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: #224259;
  opacity: 0.7;
  /* background: #bbb;
  opacity: 0.9;
  filter: blur(15px); */
`;

export const AboveModalContainer = styled.div`
  position: relative;
  // Necessary so that it appears above the BlurredBackground;
  z-index: 9001;
  min-width: 12rem;
  width: 80vw;
  max-width: 24rem;
  height: 100%;
  background: #fcfcfc;
  border-radius: 4px;
  padding: 1.2rem;

  @media (min-width: 400px) {
    font-size: 2.4rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 1.4rem;

    span {
      display: flex;
      flex-direction: column;
      height: 3rem;

      h3 {
        font-size: 3rem;
        font-family: "Bangers", cursive;

        @media (max-width: 700px) {
          font-size: 2.4rem;
        }

        @media (max-width: 400px) {
          font-size: 1.8rem;
        }
      }

      p {
        font-size: 1rem;
        color: #d40;
      }
    }
  }
`;
