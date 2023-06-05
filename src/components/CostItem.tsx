import "./CostItem.css";

export function CostItemComponent(): JSX.Element {
  return (
    <div className="cost-item">
      <div>март 2021 12</div>
      <div className="cost-item__description">
        <h2> Холодильник</h2>
        <div className="cost-item__price">$999.9</div>
      </div>
    </div>
  );
}
