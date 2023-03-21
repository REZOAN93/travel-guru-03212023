import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../../logo.png";
import "./Header.css";
import Form from "react-bootstrap/Form";
import { Button, Image, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const emailIcon = <BsSearch />;
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand>
          <Image id="header-img" src={img1}></Image>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex">
              <Form.Control
                id="form-search"
                type="search"
                placeholder="Search your Destination..."
                className="me-2"
                aria-label="Search"
              />
            </Form>

            <Nav.Link className="me-3" href="#deets">
              News
            </Nav.Link>
            <Nav.Link className="me-3" href="#deets">
              Destination
            </Nav.Link>
            <Nav.Link className="me-3" href="#deets">
              Blog
            </Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-success">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
