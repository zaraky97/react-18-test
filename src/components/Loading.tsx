import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Football } from '@styled-icons/ionicons-outline/Football';

const bounce = keyframes`
    0% { top: 50%; left: 52%; animation-timing-function: ease-in;}
    /* 40% { top: 50%; left: 54%; animation-timing-function: ease; } */
    40% {}
    50% { top: 58%; left: 56%; animation-timing-function: ease-out; }
    55% {top: 48%; left: 58%; height: 24px; animation-timing-function: ease-in; }
    60% {top: 56%; left: 60%; height: 36px; animation-timing-function: ease-out; }
    65% {top: 46%; left: 62% animation-timing-function: ease-in;}
    70% {top: 54%; left: 63% animation-timing-function: ease-in;}
    75% {top: 44%; left: 64% animation-timing-function: ease-in;}
    80% {top: 52%; left: 65% animation-timing-function: ease-in;}
  100% { top: 42%; left: 66%;  animation-timing-function: ease-in;}
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${bounce} 2s;
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
