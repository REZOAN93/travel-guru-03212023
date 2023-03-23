import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "./Login.css";

const provider = new GoogleAuthProvider();
const Login = () => {
  const { googleAuth, usersignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    usersignin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    googleAuth(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <Form onSubmit={handleSignin} className="m-auto mt-5 login-form">
        <p id="loginpage">Login</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name or Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-between"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Remember me" />
          <Link>Forget Password</Link>
        </Form.Group>
        <>{error}</>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>

        <div id="new-account">
          <p>
            Don't have an Account?{" "}
            <Link to={"/register"}>Create an account</Link>
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
        <Button
          onClick={handleGoogleLogin}
          className="mb-2"
          variant="outline-primary"
        >
          Login With Google
        </Button>{" "}
        <Button variant="outline-secondary">Login With Github</Button>{" "}
      </div>
    </div>
  );
};

export default Login;
