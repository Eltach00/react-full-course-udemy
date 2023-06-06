import "./DiagramBar.css";
export function DiagramBar({ label, value, maxValue }): JSX.Element {
  let barHeight = "0%";
  if (maxValue > 0) {
    barHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div
          className="diagram-bar__fill"
          style={{
            height: barHeight,
          }}></div>
      </div>
      <div className="diagram-bar__label"> {label}</div>
    </div>
  );
}
