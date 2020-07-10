import React, { useState } from "react";
import Slider from "react-slick";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import QRCode from "qrcode.react";

import { useSwr } from "../../hooks/useSwr";
import { Container, Card, CardImage, CarInfo, ModalDiv } from "./styles";
import Header from "../../components/Header";

const settings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const ListCars = () => {
  const { data } = useSwr("cars");
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState({});

  const onOpen = (car) => {
    setNome(car.name);
    setOpen(true);
    setQrCodeValue(JSON.stringify(car));
  };

  return (
    <>
      <Header>
        <img src="https://i.imgur.com/mqtCXDr.png" alt="Logo" />
      </Header>
      <div>
        <Modal open={open} onClose={() => setOpen(false)} center>
          <ModalDiv>
            <h2>{nome}</h2>
            <QRCode value={qrCodeValue} />
          </ModalDiv>
        </Modal>
      </div>
      <Container>
        <Slider {...settings}>
          {data?.map((car) => (
            <Card key={car.id}>
              {car.image && <CardImage src={car.image} alt={car.name} />}
              <CarInfo>
                <p>{car.marca}</p>
                <p>{car.name}</p>
                <button onClick={() => onOpen(car)}>Ver peças</button>
              </CarInfo>
            </Card>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default ListCars;
