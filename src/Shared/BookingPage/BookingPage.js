import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoomDetails from "../../Hotels/RoomDetails/RoomDetails";
import Map from "../Map/Map";
import { useLoaderData } from "react-router-dom";

const BookingPage = () => {
  const room = useLoaderData();
  return (
    <Container>
      <hr />
      <Row>
        <Col>
          {room.map((room) => (
            <RoomDetails room={room}></RoomDetails>
          ))}
        </Col>
        <Col>
          <Map />
        </Col>
      </Row>
    </Container>
  );
};

export default BookingPage;
