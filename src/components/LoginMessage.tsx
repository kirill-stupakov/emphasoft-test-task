import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { AuthContext } from "./AuthContext";

const LoginMessage = () => {
  const { setIsLoginShown } = useContext(AuthContext)!;
  const showLogin = () => setIsLoginShown(true);

  return (
    <Container className="flex-grow-1 d-flex justify-content-center align-items-center">
      <h1 className="text-center">
        Please,{" "}
        <Button variant="link" className="p-0 h1 fs-1" onClick={showLogin}>
          log in
        </Button>{" "}
        to see the list of users.
      </h1>
    </Container>
  );
};

export default LoginMessage;
