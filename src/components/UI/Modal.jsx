import React from "react";
import Card from "./Card";
import Button from "./Button";
import { styled } from "styled-components";

const Modal = (props) => {
  return (
    <>
      <Backdrop onClick={props.onHandleError} />
      <CardContainer>
        <Title>
          <h2>{props.title}</h2>
        </Title>
        <MessageContainer>
          <p>{props.message}</p>
        </MessageContainer>
        <Footer>
          <Button onClick={props.onHandleError}>Okay!</Button>
        </Footer>
      </CardContainer>
    </>
  );
};

export default Modal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const CardContainer = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const Title = styled.header`
  background: #0d9488;
  padding: 1rem;

  h2 {
    margin: 0;
    color: white;
  }
`;

const MessageContainer = styled.div`
  padding: 1rem;
`;

const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
