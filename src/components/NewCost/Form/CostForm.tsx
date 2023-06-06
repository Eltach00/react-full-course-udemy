import { NewCostButton } from "../Button/NewCostButton";
import "./CostForm.css";
import { useState } from "react";

interface costFormProps {
  onClick: () => void;
  newCostHanlder: (data) => void;
}

export function CostForm({
  onClick,
  newCostHanlder,
}: costFormProps): JSX.Element {
  const [data, setData] = useState({ title: "", price: "", date: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    const sendData = {
      ...data,
      date: new Date(data.date),
      id: Math.random().toString(),
    };
    console.log(sendData);
    newCostHanlder(sendData);
    setData({ title: "", price: "", date: "" });
  };

  const inputHandler = (e, input) => {
    setData((previos) => ({ ...previos, [input]: e.target.value }));
  };
  return (
    <form className="new-cost__controls" onSubmit={submitHandler}>
      <div className="new-cost__control">
        <label> Title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e: any) => inputHandler(e, "title")}
        />
      </div>
      <div className="new-cost__control">
        <label>Cost</label>
        <input
          type="number"
          value={data.price}
          onChange={(e: any) => inputHandler(e, "price")}
          min="0.01"
          step="0.01"
        />
      </div>
      <div className="new-cost__control">
        <label>Cost</label>
        <input
          value={data.date}
          type="date"
          onChange={(e: any) => inputHandler(e, "date")}
          min="2022-01-01"
          step="2023-12-31"
        />
      </div>
      <div className="new-cost__actions">
        <NewCostButton type="submit">Add</NewCostButton>
        <NewCostButton onClick={onClick}>Cancel</NewCostButton>
      </div>
    </form>
  );
}
