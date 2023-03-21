import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Coxbazar.css";

const Coxbazar = () => {
  return (
    <Container className="coxbazar">
      <Row>
        <Col lg="6" className="home-page-1 "></Col>
        <Col lg="6" className="home-page-2 "></Col>
      </Row>
    </Container>
  );
};

export default Coxbazar;
