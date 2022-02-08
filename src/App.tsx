import React from "react";
import "./App.scss";
import TopBar from "./components/TopBar";
import { AuthContextProvider } from "./components/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App vh-100 d-flex flex-column">
        <TopBar />
      </div>
    </AuthContextProvider>
  );
}

export default App;
