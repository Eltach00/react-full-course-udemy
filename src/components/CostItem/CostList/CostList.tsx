import { CostItemComponent } from "../CostItem.component";
import "./CostList.css";

export function CostList({ costs }): JSX.Element {
  if (costs.length === 0) {
    return (
      <h1 className="cost-list__fallback">This year you do not waste money</h1>
    );
  }
  return (
    <ul className="cost-list">
      {costs.map((item) => {
        return <CostItemComponent key={item.id} {...item} />;
      })}
    </ul>
  );
}
