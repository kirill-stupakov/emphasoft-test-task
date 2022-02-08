import React, { createContext, useEffect, useState } from "react";
import { user } from "../types";

type AuthContextType = {
  user: user | undefined;
  isSignUpShown: boolean;
  setIsSignUpShown: React.Dispatch<React.SetStateAction<boolean>>;
  isLoginShown: boolean;
  setIsLoginShown: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<user>();
  const [isSignUpShown, setIsSignUpShown] = useState(false);
  const [isLoginShown, setIsLoginShown] = useState(false);

  useEffect(() => setUser({ username: "UserName" }), []);

  const outValue = {
    user,
    isSignUpShown,
    setIsSignUpShown,
    isLoginShown,
    setIsLoginShown,
  };

  return (
    <AuthContext.Provider value={outValue}>{children}</AuthContext.Provider>
  );
};
