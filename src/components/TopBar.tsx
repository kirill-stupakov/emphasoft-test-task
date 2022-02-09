import React, { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { AuthContext } from "./AuthContext";

const TopBar = () => {
  const { username, setUsername, setToken, setIsLoginShown, setIsSignUpShown } =
    useContext(AuthContext)!;

  const logOut = () => {
    setUsername("");
    setToken("");
  };

  const showLogin = () => {
    setIsLoginShown(true);
  };

  const showSignup = () => {
    setIsSignUpShown(true);
  };

  return (
    <Navbar bg="light" expand="sm">
      <Container fluid>
        <Navbar.Brand href="/">Emphasoft Test Task</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {username ? (
            <>
              <Navbar.Text>
                Signed in as <span className="fw-bold">{username}</span>
              </Navbar.Text>
              <Button variant="danger" className="ms-2" onClick={logOut}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline-primary"
                className="mx-1"
                onClick={showLogin}
              >
                Log In
              </Button>
              <Button className="mx-1" onClick={showSignup}>
                Sign Up
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
