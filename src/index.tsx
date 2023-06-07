import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./src4/App";
import { AuthContextProvider } from "./src4/context/auth-ctx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
