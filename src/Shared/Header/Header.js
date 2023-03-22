import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../../logo.png";
import "./Header.css";
import Form from "react-bootstrap/Form";
import { Button, Image, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

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

            <Nav.Link id="navlink" className="me-3" >
             <Link to={'/'}> Home</Link>
            </Nav.Link>
            <Nav.Link id="navlink" className="me-3" href="#deets">
              Destination
            </Nav.Link>
            <Nav.Link id="navlink" className="me-3" href="#deets">
              Blog
            </Nav.Link>
            <Nav.Link id="navlink" href="#deets">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Link to={"/login"}>Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
