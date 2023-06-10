import { data } from "../../data/data";
import Item from "./Item";
import styles from "./Items.module.scss";
export function Items({ updateAmount }): JSX.Element {
  const impData = data;
  return (
    <div className={styles.container}>
      {impData.map((item) => (
        <Item
          name={item.name}
          description={item.description}
          price={item.price}
          key={item.id}
          updateAmount={updateAmount}
        />
      ))}
    </div>
  );
}
