import { FormAddUser } from "./components/FormAddUser/FormAddUser";
import { UserArea } from "./components/UserArea/UserArea";
import "./App.css";
import { useState } from "react";

function App() {
  const [sendData, setSendData] = useState([]);
  const getData = (data) => {
    setSendData((pr) => [data, ...pr]);
  };
  return (
    <>
      <FormAddUser getData={getData} />
      <UserArea data={sendData} />
    </>
  );
}

export default App;
