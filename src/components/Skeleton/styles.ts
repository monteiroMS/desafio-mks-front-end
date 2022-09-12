import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: -135% 0%;
  }
`;

export const Container = styled.div`
  border-radius: 10px;
  background-image: linear-gradient(
    -90deg,
    #fffafa 0%,
    #c4c4c4 50%,
    #fffafa 100%
  );
  background-size: 400% 400%;
  height: 300px;
  width: 218px;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`;
