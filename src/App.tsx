import { CostItemComponent } from "./components/CostItem/CostItem.component";

function App() {
  const data = [
    { title: "Fridge", price: 1000, date: new Date(Date.now()) },
    { title: "Fridge", price: 1000, date: new Date(Date.now()) },
    { title: "Fridge", price: 1000, date: new Date(Date.now()) },
  ];
  return (
    <div className="App">
      {data.map((item) => {
        return <CostItemComponent {...item} />;
      })}
    </div>
  );
}

export default App;
