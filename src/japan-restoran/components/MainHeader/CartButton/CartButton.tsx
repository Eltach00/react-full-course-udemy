import { useContext, useEffect, useState } from "react";
import styles from "./CartButton.module.scss";
import { CartIcon } from "./CartIcon";
import CartContext from "../../../store/cart-context";

export default function CartButton({ openModal }) {
  const cartContext = useContext(CartContext);
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);

  const cartItemsNumber = cartContext.cart.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  useEffect(() => {
    if (cartContext.cart.length === 0) {
      return;
    }
    setIsButtonAnimated(true);

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.cart]);
  return (
    <div className={styles.cart} onClick={openModal}>
      <p className={styles.icon}>
        <CartIcon />
      </p>
      <p>
        Cart <span>{cartItemsNumber}</span>
      </p>
    </div>
  );
}
