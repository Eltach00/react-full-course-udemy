import "./date.css";

interface DateComponentProps {
  date: Date;
}

export function DateComponent({ date }: DateComponentProps): JSX.Element {
  const year = date.getFullYear();
  const month = date.toLocaleString("ru-Ru", {
    month: "long",
  });
  const day = date.toLocaleString("ru-Ru", {
    day: "2-digit",
  });
  return (
    <div className="cost-date">
      <div className="cost-date__year "> {year} </div>
      <div className="cost-date__month"> {month} </div>
      <div className="cost-date__day "> {day} </div>
    </div>
  );
}
