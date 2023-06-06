import "./Card.css";
import { PropsWithChildren } from "react";

interface ICard {
  className?: string;
}
export function Card({
  children,
  className,
}: PropsWithChildren<ICard>): JSX.Element {
  const classes = "card " + className;
  return <div className={classes}> {children}</div>;
}
