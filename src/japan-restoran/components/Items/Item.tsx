import { useContext, useRef } from "react";
import styles from "./Items.module.scss";
import CartContext from "../../store/Cart";

export default function Item({ name, price, description, updateAmount }) {
  const ctx = useContext(CartContext);
  const inputRef = useRef<HTMLInputElement>();
  const submitHandler = (e) => {
    e.preventDefault();
    const sendData = {
      name,
      price,
      amount: parseInt(inputRef.current.value),
    };
    ctx.updateCart(sendData);
    updateAmount(ctx.sendCartAmount());
  };
  return (
    <div className={styles.item}>
      <div className={styles.desc}>
        <h3>{name}</h3>
        <p className={styles.sostav}>{description}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <form onSubmit={submitHandler} className={styles.menu}>
        <p>
          Количество
          <input ref={inputRef} defaultValue={1} min={1} type="number" />
        </p>
        <button type="submit">Add to cart</button>
      </form>
    </div>
  );
}
