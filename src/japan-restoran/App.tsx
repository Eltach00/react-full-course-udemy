import { useContext, useState } from "react";
import "./App.css";
import { Items } from "./components/Items/Items";
import MainHeader from "./components/MainHeader/MainHeader";
import { Poster } from "./components/Poster/Poster";
import CartContext from "./store/Cart";

function App() {
  const ctx = useContext(CartContext);
  const [cartAmount, setCartAmount] = useState(ctx.sendCartAmount());

  return (
    <>
      <MainHeader cartAmount={cartAmount} />
      <Poster />
      <Items updateAmount={setCartAmount} />
    </>
  );
}

export default App;
