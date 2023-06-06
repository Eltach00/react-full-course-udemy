import { useState } from "react";
import { CostsComponent } from "./components/CostItem/Cost/Costs.component";
import { NewCost } from "./components/NewCost/NewCost";

const initialData = [
  { title: "Fridge", price: 1000, date: new Date(Date.now()) },
  { title: "Fridge", price: 1000, date: new Date(Date.now()) },
  { title: "Fridge", price: 1000, date: new Date(Date.now()) },
];
function App() {
  const [data, setNewData] = useState(initialData);

  const newCostHanlder = (data) => {
    setNewData((pr) => [...pr, data]);
  };
  return (
    <>
      <NewCost newCostHanlder={newCostHanlder} />
      <CostsComponent data={data} />
    </>
  );
}

export default App;
