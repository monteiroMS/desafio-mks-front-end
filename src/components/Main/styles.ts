import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  flex-grow: 1;
  gap: 23px;
  padding: 100px;

  @media (max-width: 460px) {
    padding: 50px 20px;
  }
`;