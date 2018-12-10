import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 20rem;
  height: 24rem;
  border: 2px solid teal;
  box-shadow: 60px -16px teal;
  background: #fcfcfc;

  label {
    font-size: 2rem;
    font-family: "Bangers", cursive;
  }

  input {
    width: 10rem;
    height: 3rem;
    border: 2px solid #333;
  }

  button {
    width: 10rem;
    height: 4rem;
    background: blue;
  }
`;

const form = ({ children, onSubmit }) => {
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

export default form;
