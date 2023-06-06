import { IData } from "../../../interfaces/data.interface";
import { Diagram } from "../../Diagram/Diagram";

interface Props {
  costs: IData[];
}

export function CostDiagram({ costs }: Props): JSX.Element {
  const data = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (let cost of costs) {
    const costMonth = cost.date.getMonth();
    data[costMonth].value += cost.price;
  }

  return <Diagram datasets={data} />;
}
