import "./Cost.css";
import { CostItemComponent } from "../CostItem.component";
import { Card } from "../../UI/Card";
import { useEffect, useState } from "react";
import { YearFilter } from "../YearFilter/YearFilter";

interface CostsProps {
  data: {
    title: string;
    date: Date;
    price: number;
  }[];
}

export function CostsComponent({ data }: CostsProps): JSX.Element {
  const [costs, setCosts] = useState(data);
  const [year, setYear] = useState(new Date().getFullYear().toString());

  useEffect(() => {
    setCosts(data);
  }, [data]);

  const yearChangeHandler = (e) => {
    setYear(e.target.value);
  };

  return (
    <Card className="costs">
      <YearFilter yearChangeHandler={yearChangeHandler} year={year} />
      {costs.map((item, i) => {
        return <CostItemComponent key={i} {...item} />;
      })}
    </Card>
  );
}
