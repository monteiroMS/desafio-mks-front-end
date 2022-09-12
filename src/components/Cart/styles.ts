import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0F52BA;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 62.74%;
  position: absolute;
  padding: 36px 47px;
  min-height: 93%;
  width: 30vw;
  z-index: 1;
`;

export const CloseCartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: none;
  border-radius: 100%;
  color: white;
  height: 38px;
  width: 38px;
  font-size: 28px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;

export const TitleAndCloseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: white;
    font-size: 27px;
    font-weight: 700;
    margin: 0;
    width: 180px;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  flex-grow: 1;
  padding: 30px 10px;

  .white-text {
    color: white;
  }
`;

export const PriceContainer = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 700;
`;

export const FinishPurchaseBtn = styled.button`
  background-color: black;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 28px;
  height: 90px;
  margin-bottom: -36px;
  margin-left: -47px;
  margin-right: -47px;

  &:hover {
    cursor: pointer;
  }
`;
