import React, { useContext } from "react";
import "./App.scss";

import { AuthContext } from "./components/AuthContext";
import TopBar from "./components/TopBar";
import UserList from "./components/UserList";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  const { isLoginShown, isSignUpShown } = useContext(AuthContext)!;

  return (
    <div className="App vh-100 d-flex flex-column">
      <TopBar />
      {isLoginShown && <LogInForm />}
      {isSignUpShown && <SignUpForm />}
      <UserList />
    </div>
  );
}

export default App;
