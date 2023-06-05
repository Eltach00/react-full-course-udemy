import "./CostItem.css";
import { DateComponent } from "./date/date.component";

interface ConstItemProps {
  title: string;
  date: Date;
  price: number;
}

export function CostItemComponent({
  date,
  price,
  title,
}: ConstItemProps): JSX.Element {
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
