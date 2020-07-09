import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 14px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;

  flex: 1;
  margin: 4px;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 8px;
`;

export const CardImage = styled.img`
  width: 194px;
  height: 164px;
  border-radius: 8px;
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  p {
    margin: 8px;
    font-weight: bold;
  }
`;
