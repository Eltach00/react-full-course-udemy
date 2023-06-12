import { useContext, useRef } from "react";
import styles from "./Items.module.scss";
import { Input } from "./Input/Input";
import CartContext from "../../store/cart-context";

export default function Item({ name, price, description, id }) {
  const ctx = useContext(CartContext);
  const inputRef = useRef<HTMLInputElement>();

  const submitHandler = (e) => {
    e.preventDefault();
    const sendData = {
      id,
      name,
      price,
      amount: parseInt(inputRef.current.value),
    };
    ctx.addItem(sendData);
  };

  const formadetedPrice = `$${price.toFixed(2)}`;
  const inputAttr = {
    defaultValue: 1,
    min: 1,
    type: "number",
    id: `${Math.random()}`,
  };
  return (
    <div className={styles.item}>
      <div className={styles.desc}>
        <h3>{name}</h3>
        <p className={styles.sostav}>{description}</p>
        <p className={styles.price}>{formadetedPrice}</p>
      </div>
      <form onSubmit={submitHandler} className={styles.menu}>
        <Input ref={inputRef} inp={inputAttr} label="Количество" />
        <button type="submit">Add to cart</button>
      </form>
    </div>
  );
}
