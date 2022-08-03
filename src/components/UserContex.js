import React from "react";
import { createContext } from "react";
const authContext = React.createContext(undefined);

function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsisAuthenticated] = React.useState();

  const authHandle = () => {
    setIsisAuthenticated(isAuthenticated);
  };

  return (
    <authContext.Provider value={authHandle}> {children}</authContext.Provider>
  );
}

const useAuthContext = () => {
  const context = React.useContext(authContext);
  return context;
};

export { AuthContextProvider, useAuthContext };
