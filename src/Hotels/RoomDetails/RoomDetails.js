import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const RoomDetails = (props) => {
  const { Description, picture,Type,BaseRate } = props.room;
  return (
    <Card className="mb-3">
      <Row>
        <Col>
          <Card.Img variant="top" src={picture} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{Type}</Card.Title>
            <Card.Text>
              {Description}
            </Card.Text>
            <Button variant="primary">$ {BaseRate} per Night</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default RoomDetails;
