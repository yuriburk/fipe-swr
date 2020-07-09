import React from 'react';

import { useSwr } from '../../hooks/useSwr';
import { Container, Card, CardImage, CarInfo } from './styles';

const ListCars = () => {
  const { data } = useSwr('cars');

  return (
    <Container>
      {data?.map((car) => (
        <Card key={car.id}>
          {car.image && <CardImage src={car.image} alt={car.name} />}
          <CarInfo>
            <p>{car.marca}</p>
            <p>{car.name}</p>
          </CarInfo>
        </Card>
      ))}
    </Container>
  );
};

export default ListCars;
