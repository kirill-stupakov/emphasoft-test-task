import React, { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { AuthContext } from "./AuthContext";

const TopBar = () => {
  const { user } = useContext(AuthContext)!;

  return (
    <Navbar bg="light" expand="sm">
      <Container fluid>
        <Navbar.Brand href="#home">Emphasoft Test Task</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {user ? (
            <>
              <Navbar.Text>
                Signed in as <span className="fw-bold">{user.username}</span>
              </Navbar.Text>
              <Button variant="danger" className="ms-2">
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline-primary" className="mx-1">
                Log In
              </Button>
              <Button className="mx-1">Sign Up</Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
