import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;

  .slick-slide div {
    outline: none !important;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 284px;
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: -48px;
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f2f2f2;
  border-radius: 8px;
  margin: 4px;
  padding: 14px;

  p {
    margin: 8px;
    font-weight: bold;
  }

  button {
    padding: 5px;
    border-radius: 4px;
    background-color: white;
    margin-top: 15px;
    font-weight: bold;
    font-size: 15px;
    border: 1px solid;
    border-color: #ff3c09;

    &:hover {
      background-color: #ff3c09;
      color: white;
    }
  }
`;
