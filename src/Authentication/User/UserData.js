import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Context/AuthProvider";

const UserData = () => {
  const { user, updateuser } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  console.log(user)

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleupdateuserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateuser(profile)
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const handleupdateprofie = (event) => {
    event.preventDefault();
    handleupdateuserProfile(name)
   
  };

  return (
    <Form onSubmit={handleupdateprofie} className="w-25 m-auto mt-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          onChange={handleName}
          name="name"
          defaultValue={user.displayName}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" defaultValue={user.email} readOnly />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>photoURL</Form.Label>
        <Form.Control type="photoURL" name="phtoURL" />
      </Form.Group>

      <Button variant="primary" type="submit">
        User Update
      </Button>
    </Form>
  );
};

export default UserData;
