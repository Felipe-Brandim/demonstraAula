import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FF2C97;
`;

const Message = styled.h1`
  color: white;
  font-size: 3rem;
  font-family: 'Arial', sans-serif;
`;

const Message2 = styled.h1`
  color: black;
  font-size: 3rem;
  font-family: 'Arial', sans-serif;
`;

const Home = () => {
  return (
    <Container>
      <Message>Ana,você é minha princesa e eu te amo!</Message>
      <Message2>Aqui começa o desenvolvimento do Sonho Felpudo.</Message2>
    </Container>
  );  
};

export default Home;
