import React, { createContext, useEffect, useState } from "react";
import cookie from "cookie";

type AuthContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  isLoginShown: boolean;
  setIsLoginShown: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [isLoginShown, setIsLoginShown] = useState(false);
  const [token, setToken] = useState(cookie.parse(document.cookie).token || "");
  const [username, setUsername] = useState(
    cookie.parse(document.cookie).username || ""
  );

  useEffect(() => {
    document.cookie = cookie.serialize("token", token);
  }, [token]);

  useEffect(() => {
    document.cookie = cookie.serialize("username", username);
  }, [username]);

  const outValue = {
    token,
    setToken,
    username,
    setUsername,
    isLoginShown,
    setIsLoginShown,
  };

  return (
    <AuthContext.Provider value={outValue}>{children}</AuthContext.Provider>
  );
};
