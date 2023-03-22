import React from "react";
import { Button, Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./RightSide.css";

const RightSide = (props) => {
  const { name, picture, _id } = props.hotel;
  return (
    <Card id="hotel-sumary">
      <Card.Img variant="top" src={picture} />
      <Carousel.Caption id="caption">
        <Link id="hotellinks" to={`/hotel`}>{name}</Link>
      </Carousel.Caption>
    </Card>
  );
};

export default RightSide;
