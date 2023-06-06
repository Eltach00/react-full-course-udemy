import "./CostItem.css";
import { DateComponent } from "./date/date.component";
import { PropsWithChildren } from "react";

interface CostItemProps {
  id: string;
  title: string;
  date: Date;
  price: string;
}

export function CostItemComponent({
  date,
  price,
  title,
}: PropsWithChildren<CostItemProps>): JSX.Element {
  return (
    <div className="cost-item">
      <DateComponent date={date} />
      <div className="cost-item__description">
        <h2> {title} </h2>
        <div className="cost-item__price">${price}</div>
      </div>
    </div>
  );
}
