import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../App";

export default function Counter() {
  const dispatchFunc = useDispatch();
  const { value, isVisible } = useSelector(
    (state: { value; isVisible }) => state
  );
  const { isLogged } = useSelector(({ auth }) => auth);

  console.log(isLogged);

  function inc() {
    dispatchFunc(counterActions.increment());
  }

  function dec() {
    dispatchFunc(counterActions.decrement());
  }

  function toggle() {
    dispatchFunc(counterActions.toggleVisible());
  }

  function addTen() {
    dispatchFunc(counterActions.incMore(10));
  }

  return (
    <div>
      {isVisible && <h1>{value}</h1>}
      <div onClick={inc}>+</div>
      <div onClick={dec}>-</div>
      <div onClick={addTen}> Add 10</div>
      <div onClick={toggle}>Show/Hide</div>
    </div>
  );
}
