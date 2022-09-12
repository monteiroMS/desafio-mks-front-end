import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 95px;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  img {
    height: 57px;
  }

  .title {
    flex-grow: 1;
    font-weight: 400;
    font-size: 13px;
    max-width: 113px;
  }

  .price {
    font-weight: 700;
    font-size: 14px;
    margin-right: 15px;
  }

  .delete-button {
    align-self: start;
    background-color: black;
    border: none;
    border-radius: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    margin: -25px;
    width: 18px;
  }

  .delete-button:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    height: 220px;
    flex-direction: column;

    img {
      height: 95px;
    }

    .delete-button {
      align-self: end;
      height: 30px;
      font-size: 25px;
      width: 30px;
    }

    .price {
      background-color: #373737;
      border-radius: 5px;
      color: white;
      display: flex;
      align-items: center;
      height: 25px;
      font-size: 15px;
      font-weight: 700;
      padding: 5px 5px;
      margin: 10px 0 15px 0;

    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;

  .qtd {
    color: black;
    font-size: 5px;
  }

  .pill {
    border: 1px solid #BFBFBF;
    border-radius: 4px;
    display: flex;
    align-items: center;

    button {
      background-color: white;
      border: none;
      border-radius: 4px;
    }

    button:hover {
      cursor: pointer;
    }

    p {
      border-left: 1px solid #BFBFBF;
      border-right: 1px solid #BFBFBF;
      height: 12px;
      font-size: 10px;
      padding: 0 5px;
      margin: 0;
    }
  }

  @media (max-width: 500px) {
    .qtd {
      display: none;
    }

    .pill {
      height: 35px;
      width: 90px;
      align-items: center;
      justify-content: space-evenly;

      p {
        height: 26px;
        padding: 0 10px;
        font-size: 16px;
      }
    }
  }
`;
