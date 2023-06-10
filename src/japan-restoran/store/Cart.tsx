import { createContext, useState } from "react";
import { IData } from "../intefaces/data.interface";
import { updateCartUtil } from "../util/updateCart";

const CartContext = createContext({
  cart: [],
  updateCart: (data: IData) => {},
  sendCartAmount: (): number => 0,
  changeAmount: (name: string, inc: number): void => {},
});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState<IData[]>([]);
  const updateCart = (data: IData) => {
    setCart(updateCartUtil(cart, data));
    console.log(cart);
  };
  const changeAmount = (name: string, inc: number) => {
    setCart((pr) => {
      pr.map((item) => {
        if (item.name === name) {
          item.amount += inc;
        }
        return item;
      });
      return pr;
    });
  };

  const sendCartAmount = () => {
    return cart.length;
  };
  return (
    <CartContext.Provider
      value={{ cart, updateCart, sendCartAmount, changeAmount }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
