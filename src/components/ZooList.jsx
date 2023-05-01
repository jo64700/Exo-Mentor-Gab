import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
  background-color: #892be245;
  text-align: center;
`;

const Title = styled.h1`
  color: red;
  text-align: center;
  font-size: 3rem;
  padding-top: 1rem;
`;

const ContainerZoo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Button = styled.button`
  border-radius: 2rem;
  padding: 1rem;
  margin-top: 1rem;
  background: linear-gradient(red, green, yellow);
  &:hover {
    background: linear-gradient(red, yellow);
  }
`;

const ZooList = () => {

  return (
    <Container>
      <Title> Bienvenue au Zoo</Title>
      <Button> </Button>
      <ContainerZoo>
        
      </ContainerZoo>
    </Container>
  );
};

export default ZooList;
