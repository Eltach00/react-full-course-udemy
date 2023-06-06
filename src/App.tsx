import { useState } from "react";
import { CostsComponent } from "./components/CostItem/Cost/Costs.component";
import { NewCost } from "./components/NewCost/NewCost";
import { IData } from "./interfaces/data.interface";

const initialData: IData[] = [
  {
    id: Math.random().toString(),
    title: "Fridge",
    price: 1000,
    date: new Date(Date.now()),
  },
  {
    id: Math.random().toString(),
    title: "Fridge",
    price: 1000,
    date: new Date(Date.now()),
  },
  {
    id: Math.random().toString(),
    title: "Fridge",
    price: 1000,
    date: new Date(Date.now()),
  },
];
function App() {
  const [data, setNewData] = useState<IData[]>(initialData);

  const newCostHanlder = (data: IData) => {
    setNewData((pr): IData[] => [data, ...pr]);
  };
  return (
    <>
      <NewCost newCostHanlder={newCostHanlder} />
      <CostsComponent data={data} />
    </>
  );
}

export default App;
