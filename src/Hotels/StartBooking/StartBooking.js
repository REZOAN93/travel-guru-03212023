import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "./StartBooking.css";

const StartBooking = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="align-items-center mt-5 ms-5">
            <p id="headertext">COX'S BAZAR</p>
            <p>
              Coxs bazar beach is known for its serenity. During the sunrise &
              the sunset, you can easily lost with nature. It is not only famous
              for its long natural sandy sea beach, but it is also famous for
              the amazing hospitality, fresh seafood, marine drive, kutubdia,
              Moheshkhali Island, and amazing St. Martin's Island. Mainly Cox's
              Bazar is famous for its longest natural sandy beach in the world.
            </p>
          </div>
        </Col>
        <Col>
          <Form className="w-50 m-auto mt-5 booking-form">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Origin</Form.Label>
                <Form.Control
                  type="address"
                  placeholder="Please Enter your Current address"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="address"
                  placeholder="Please Enter your Destination address"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>From</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>To</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Row>

            <div id="booking-link">
              <Link id="start-booking" to={'/bookingpage'}>Start Booking</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default StartBooking;
