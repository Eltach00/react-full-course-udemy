import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { useContext, useState } from "react";
import CartItem from "./CartItem/CartItem";
import { IData } from "../../intefaces/data.interface";
import CartContext from "../../store/cart-context";

const PortalModel = ({ outsideHandle, modaleClose }) => {
  const { cart } = useContext(CartContext);
  const [cartState, setCartState] = useState(cart);
  const changeAmount = (name: string, inc: number) => {
    setCartState((pr) => {
      pr.map((item) => {
        if (item.name === name) {
          item.amount += inc;
        }
        return item;
      });
      return pr;
    });
    console.log(cartState);
  };

  return (
    <div onClick={outsideHandle} data-id="modal" className={styles.modal}>
      <div className={styles.container}>
        <h1 className={styles.header}>Cart</h1>
        <div className={styles.body}>
          {cartState.map((item: IData) => (
            <CartItem key={item.name} item={item} changeAmount={changeAmount} />
          ))}
          <button className={styles.btn} onClick={modaleClose}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export function Modal({ modaleClose }): JSX.Element {
  const outsideHandle = (e) => {
    const div = e.target as HTMLDivElement;
    if (div.dataset.id === "modal") {
      modaleClose();
    }
  };
  return (
    <>
      {createPortal(
        <PortalModel outsideHandle={outsideHandle} modaleClose={modaleClose} />,
        document.getElementById("here")
      )}
    </>
  );
}
