import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Football } from '@styled-icons/ionicons-outline/Football';

const bounce = keyframes`
    0% { top: 40%;animation-timing-function: ease-in;}
    50% { top: 44%;animation-timing-function: ease; }
    90% {top: 40%;  animation-timing-function: ease-in;}
  100% { top: 40%;   animation-timing-function: ease-in;}
`;

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-40%, -50%);
  animation: ${bounce} 0.5s;
  animation-iteration-count: infinite;
`;

const StyledFootball = styled(Football)`
  position: absolute;
  height: 36px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${bounce} 3s;
  animation-iteration-count: infinite;
`;

export const Loading: React.FC = () => {
  return (
    <Container>
      <StyledFootball size={36} />
    </Container>
  );
};
