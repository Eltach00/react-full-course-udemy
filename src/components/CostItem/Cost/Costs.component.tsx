import "./Cost.css";
import { Card } from "../../UI/Card";
import { useEffect, useState } from "react";
import { YearFilter } from "../YearFilter/YearFilter";
import { CostList } from "../CostList/CostList";
import { CostDiagram } from "../CostDiagram/CostDiagram";
import { IData } from "../../../interfaces/data.interface";

interface CostsProps {
  data: IData[];
}

export function CostsComponent({ data }: CostsProps): JSX.Element {
  const [costs, setCosts] = useState(data);
  const [year, setYear] = useState("2023");

  useEffect(() => {
    setCosts(data);
  }, [data]);

  const yearChangeHandler = (e) => {
    setYear(e.target.value);
  };

  const filterCosts = costs.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  return (
    <Card className="costs">
      <YearFilter yearChangeHandler={yearChangeHandler} year={year} />
      <CostDiagram costs={costs} />
      <CostList costs={filterCosts} />
    </Card>
  );
}
