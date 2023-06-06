import "./NewCost.css";
import { useState } from "react";
import { CostForm } from "./Form/CostForm";
import { Card } from "../UI/Card";
import { NewCostButton } from "./Button/NewCostButton";

export function NewCost({ newCostHanlder }): JSX.Element {
  const [showCost, setShowCost] = useState(false);
  const clickHandler = () => {
    setShowCost(!showCost);
  };

  return (
    <Card>
      {showCost || (
        <NewCostButton onClick={clickHandler}>Add new cost</NewCostButton>
      )}
      {showCost && (
        <CostForm newCostHanlder={newCostHanlder} onClick={clickHandler} />
      )}
    </Card>
  );
}
