import React from 'react';
import Slider from 'react-slick';

import { useSwr } from '../../hooks/useSwr';
import { Container, Card, CardImage, CarInfo } from './styles';
import Header from '../../components/Header';

const settings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const ListCars = () => {
  const { data } = useSwr('cars');

  return (
    <>
      <Header>
        <img src="https://i.imgur.com/mqtCXDr.png" alt="Logo" />
      </Header>
      <Container>
        <Slider {...settings}>
          {data?.map((car) => (
            <Card key={car.id}>
              {car.image && <CardImage src={car.image} alt={car.name} />}
              <CarInfo>
                <p>{car.marca}</p>
                <p>{car.name}</p>
              </CarInfo>
            </Card>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default ListCars;
