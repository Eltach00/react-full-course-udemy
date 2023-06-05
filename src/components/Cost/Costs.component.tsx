import "./Cost.css";
import { CostItemComponent } from "../CostItem/CostItem.component";
import { Card } from "./Card";

export function CostsComponent(): JSX.Element {
  const data = [
    { title: "Fridge", price: 1000, date: new Date(Date.now()) },
    { title: "Fridge", price: 1000, date: new Date(Date.now()) },
    { title: "Fridge", price: 1000, date: new Date(Date.now()) },
  ];
  return (
    <Card className="costs">
      {data.map((item) => {
        return <CostItemComponent {...item} />;
      })}
    </Card>
  );
}
