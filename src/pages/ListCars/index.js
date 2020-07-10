import React, { useState } from 'react';
import Slider from 'react-slick';
import QRCode from 'qrcode.react';

import { useSwr } from '../../hooks/useSwr';
import { Container, Card, CardImage, CarInfo } from './styles';
import Header from '../../components/Header';
import Modal from '../../components/Modal';

const settings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const ListCars = () => {
  const { data } = useSwr('cars');
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(undefined);

  const handleClick = (car) => {
    setOpen(true);
    setSelectedCar(car);
  };

  return (
    <>
      <Header>
        <img src="https://i.imgur.com/mqtCXDr.png" alt="Logo" />
      </Header>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>{selectedCar?.name}</h2>
        <QRCode
          size={256}
          renderAs="svg"
          value={`https://www.webmotors.com.br/carros/estoque/${selectedCar?.manufacturer}/${selectedCar?.searchName}`}
        />
      </Modal>
      <Container>
        <Slider {...settings}>
          {data?.map((car) => (
            <Card key={car.id}>
              {car.image && <CardImage src={car.image} alt={car.name} />}
              <CarInfo>
                <p>{car.marca}</p>
                <p>{car.name}</p>
                <button onClick={() => handleClick(car)}>Ver peças</button>
              </CarInfo>
            </Card>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default ListCars;
