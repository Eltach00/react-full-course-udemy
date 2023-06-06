import { DiagramBar } from "./DiagramBar/DiagramBar";
import "./Diagram.css";

interface Props {
  datasets: {
    label: string;
    value: number;
  }[];
}

export function Diagram({ datasets }: Props): JSX.Element {
  const values = datasets.map((dataset) => dataset.value);

  const maxValue = Math.max(...values);
  return (
    <div className="diagram">
      {datasets.map((item) => (
        <DiagramBar
          key={item.label}
          label={item.label}
          value={item.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
}
