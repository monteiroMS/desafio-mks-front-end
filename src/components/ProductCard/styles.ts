import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.135216);
  display: flex;
  flex-direction: column;
  height: 300px;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 10px;
  width: 218px;
`;

export const Photo = styled.img`
  align-self: center;
  height: 138px;
`;

export const TitlePriceContainer = styled.div`
  align-items: center;  
  align-self: stretch;
  color: #2C2C2C;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;

  .price {
    background-color: #373737;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    height: 25px;
    font-size: 15px;
    font-weight: 700;
    padding: 0 5px;
  }
`;

export const Description = styled.div`
  color: #2C2C2C;
  font-size: 10px;
  padding: 0 15px;

  p {
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Button = styled.button`
  background-color: #0F52BA;
  border: none;
  border-radius: 0px 0px 8px 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600; 
  gap: 10px;
  height: 32px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;
