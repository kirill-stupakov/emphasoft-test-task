import React, { useContext } from "react";

import "./App.scss";
import { AuthContext } from "./components/AuthContext";
import TopBar from "./components/TopBar";
import UserList from "./components/UserList";
import FormWrapper from "./components/FormWrapper";
import LoginMessage from "./components/LoginMessage";

function App() {
  const { isLoginShown, token } = useContext(AuthContext)!;

  return (
    <div className="App vh-100 d-flex flex-column">
      <TopBar />

      {isLoginShown && <FormWrapper />}
      {token ? <UserList /> : <LoginMessage />}
    </div>
  );
}

export default App;
