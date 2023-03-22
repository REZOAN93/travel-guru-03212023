import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoomDetails from "../../Hotels/RoomDetails/RoomDetails";
import Map from "../Map/Map";

const BookingPage = () => {
  return (
    <Container>
      <hr />
      <Row>
        <Col>
          <RoomDetails />
        </Col>
        <Col>
          <Map />
        </Col>
      </Row>
    </Container>
  );
};

export default BookingPage;
