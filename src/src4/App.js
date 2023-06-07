import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, { AuthContextProvider } from "./context/auth-ctx";

function App() {
  const { isloggedIn } = useContext(AuthContext);
  console.log(isloggedIn);
  return (
    <>
      <MainHeader />
      <main>
        {!isloggedIn && <Login />}
        {isloggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
