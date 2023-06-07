import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isloggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", false);
  };
  return (
    <AuthContext.Provider
      value={{
        isloggedIn,
        onLogin,
        onLogout,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
