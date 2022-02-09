import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";

import "./App.scss";
import { AuthContext } from "./components/AuthContext";
import TopBar from "./components/TopBar";
import UserList from "./components/UserList";
import LogInForm from "./components/LogInForm";

function App() {
  const { isLoginShown, setIsLoginShown, token } = useContext(AuthContext)!;

  const showLogin = () => setIsLoginShown(true);

  return (
    <div className="App vh-100 d-flex flex-column">
      <TopBar />

      {isLoginShown && <LogInForm />}
      <Container
        fluid
        className="flex-grow-1 d-flex justify-content-center align-items-center"
      >
        {token ? (
          <UserList />
        ) : (
          <h1 className="text-center">
            Please,{" "}
            <Button variant="link" className="p-0 h1 fs-1" onClick={showLogin}>
              log in
            </Button>{" "}
            to see the list of users.
          </h1>
        )}
      </Container>
    </div>
  );
}

export default App;
