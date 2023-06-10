import { IData } from "../../../intefaces/data.interface";
import styles from "./CartItem.module.scss";

interface Props {
  item: IData;
  changeAmount: (name: string, inc: number) => void;
}
export default function CartItem({ item, changeAmount }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>{item.name}</h3>
        <div className={styles.underInfo}>
          <div className={styles.price}>${item.price}</div>
          <div className={styles.amount}>
            <p className={styles.x}>x</p>
            <p>{item.amount}</p>
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <p onClick={() => changeAmount(item.name, -1)}>-</p>
        <p onClick={() => changeAmount(item.name, 1)}>+</p>
      </div>
    </div>
  );
}
