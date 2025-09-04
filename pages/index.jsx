import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const Message = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-family: "Arial", sans-serif;
`;

const Home = () => {
  return (
    <Container>
      <Message>Olá turma 2025.1</Message>
    </Container>
  );
};

export default Home;
