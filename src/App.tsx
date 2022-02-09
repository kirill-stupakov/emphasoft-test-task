import React, { useContext } from "react";
import "./App.scss";

import { AuthContext } from "./components/AuthContext";
import TopBar from "./components/TopBar";
import UserList from "./components/UserList";
import LogInForm from "./components/LogInForm";
import { Button, Container } from "react-bootstrap";

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
          <h1>
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
