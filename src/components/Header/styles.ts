import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0F52BA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 70px;
`;

export const Title = styled.div`
  color: white;
  display: flex;
  align-items: center;

  .stronger {
    font-size: xx-large;
    font-weight: 700;
    margin: 0;
    margin-right: 5px;
  }

  p {
    margin: 0;
    margin-top: 7px;
  }
`;

export const CartBox = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 80px;

  p {
    margin: 0;
    font-weight: 700;
  }

  img {
    height: 18px;
    margin-right: 5px;
  }
`;
