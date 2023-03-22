import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div >
      <Form className="m-auto mt-5 login-form">
        <p id="loginpage">Login</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name or Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-between"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Remember me" />
          <Link>Forget Password</Link>
        </Form.Group>
        <div id="booking-link">
          <Link id="start-booking">Login</Link>
        </div>
        <div id="new-account">
          <p>
            Don't have an Account? <Link to={'/register'}>Create an account</Link>
          </p>
        </div>
      </Form>
      <div className="w-25 m-auto mt-2">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, height: "1px", backgroundColor: "grey" }} />

          <div>
            <p style={{ width: "70px", textAlign: "center" }}>Or</p>
          </div>

          <div style={{ flex: 1, height: "1px", backgroundColor: "grey" }} />
        </div>
      </div>

      <div className="d-grid align-items-center mt-1 m-auto google-option">
        <Button className="mb-2" variant="outline-primary">
          Login With Google
        </Button>{" "}
        <Button variant="outline-secondary">Login With Github</Button>{" "}
      </div>
    </div>
  );
};

export default Login;
