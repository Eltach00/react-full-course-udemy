import { data } from "../../data/data";
import Item from "./Item";
import styles from "./Items.module.scss";
export function Items(): JSX.Element {
  const impData = data;
  return (
    <div className={styles.container}>
      <ul>
        {impData.map((item) => (
          <Item
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
