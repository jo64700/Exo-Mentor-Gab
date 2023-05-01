import React from 'react';
import styled from 'styled-components';
import fish from './../assets/fish.jpg';
import fox from './../assets/fox.jpg';
import mouton from './../assets/mouton.jpg';
import parrot from './../assets/parrot.jpg';
import pinguins from './../assets/pinguins.jpg';
import snakes from './../assets/snakes.jpg';
import tortue from './../assets/tortue.jpg';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  background-color: white;
  border-radius: 2rem;
  width: 50rem
`;

const ZooId = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

`;

const ZooName = styled.h3`
  font-size: 1.5rem;
`;

const Image = styled.img`
  width: 30rem;
  height: 20rem;
  border-radius: 2rem;
  margin: 1rem;

`;

const ZooHabitat = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;

`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;

`;

const ZooColor = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid teal;
  background-color: ${(props) => props.color};
  margin-bottom: 1rem;
  margin-right: 1rem;

`;

const arrayAnimals = [fish, fox, mouton, parrot, pinguins, snakes,tortue];

const Zoo = () => {
  return (
    <Container>
      
    </Container>
  );
};

export default Zoo;
