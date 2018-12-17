import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  label {
    font-size: 2rem;
    font-family: "Bangers", cursive;
    padding-top: 0.4rem;
  }

  input {
    width: 100%;
    height: 2.4rem;
    border: 2px solid #333;

    &:focus {
      outline-color: #00fff0;
      border: 2px solid #00fff0;
    }
  }

  button {
    display: flex;
    justify-content: ${props => props.upload ? "flex-start" : "center" };
    width: 8rem;
    height: 2.8rem;
    margin-top: 1.4rem;
    justify-content: ${props => props.upload ? "1.3rem" : null };
    font-size: 1.3rem;
    font-family: "Bangers", cursive;
    border: 2px solid black;

    &:hover {
      background: #00fff0;
      border: 2px solid #00fff0;
    }

    &:focus {
      background: #00fff0;
      outline-color: #fcfcfc;
      border: 2px solid #00fff0;
    }

    svg {
      margin-right: 0.6rem;
    }
  }
`;

const form = ({ children, onSubmit }) => {
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

export default form;
