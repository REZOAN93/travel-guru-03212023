import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { createuserwithEmail } = useContext(AuthContext);
  const [error,setError]=useState('');

  const handleCreateuser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createuserwithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
        // ..
      });
  };
  return (
    <div>
      <Form
        onSubmit={handleCreateuser}
        className="m-auto mt-1 Register-form mb-3 "
      >
        <p id="loginpage">Register Here !</p>
        <Form.Group className="mb-0.5" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="name" placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group className="mb-0.5" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Last Name" />
        </Form.Group>
        <Form.Group className="mb-0.5" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-between mb-none"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Remember me" />
          <Link>Forget Password</Link>
        </Form.Group>
        <>{error}</>
        <Button className="w-100" variant="primary" type="submit">
          Register
        </Button>

        <div id="new-account">
          <p id="alredybackbtn">
            Already have an Account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </Form>
      <div className="w-25 m-auto mt-1">
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

      <div className="d-flex justify-content-between m-auto w-25">
        <Button className="mb-1" variant="outline-primary">
          Login With Google
        </Button>{" "}
        <Button variant="outline-secondary">Login With Github</Button>{" "}
      </div>
    </div>
  );
};

export default Register;
