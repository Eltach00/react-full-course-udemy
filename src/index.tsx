import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./japan-restoran/App";
import CartContextProvider from "./japan-restoran/store/Cart";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);
