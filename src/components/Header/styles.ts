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
  font-size: 20px;

  .stronger {
    font-size: 40px;
    font-weight: 700;
    margin: 0;
    margin-right: 5px;
  }

  p {
    margin: 0;
    margin-top: 10px;
  }
`;

export const CartBox = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 90px;

  p {
    margin: 0;
    font-weight: 700;
    font-size: 18px;
  }

  img {
    height: 18px;
    margin-right: 15px;
  }
`;
