import "./App.css";
import { Items } from "./components/Items/Items";
import MainHeader from "./components/MainHeader/MainHeader";
import { Poster } from "./components/Poster/Poster";

function App() {
  return (
    <>
      <MainHeader />
      <Poster />
      <Items />
    </>
  );
}

export default App;
