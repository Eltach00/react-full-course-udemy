import { PropsWithChildren } from "react";
import "./NewCostButton.css";
interface ButtonProps {
  onClick?: (e?: any) => void;
  type?: "button" | "reset" | "submit";
}

export function NewCostButton({
  onClick,
  children,
  type,
}: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <div className="btn-container">
      <button type={type} className="new-cost-btn" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
