import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Coxbazar.css";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import { useLoaderData } from "react-router-dom";
import { CardGroup } from "react-bootstrap";

const Coxbazar = () => {
  const hotel = useLoaderData();
  return (
    <div>
      <Row>
        <Col lg="4">
          <LeftSide />
        </Col>
        <Col lg="8">
          {hotel.map((hotel) => (
            <RightSide key={hotel._id} hotel={hotel}></RightSide>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Coxbazar;
