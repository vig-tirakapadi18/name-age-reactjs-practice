import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return (
    <ButtonContainer
      type={props.type || "button"}
      onClick={props.onClick}>
      {props.children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  font: inherit;
  border: 1px solid #0d9488;
  background: #0d9488;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover,
  &:active {
    background: #14b8a6;
    border-color: #14b8a6;
  }

  &:focus {
    outline: none;
  }
`;
