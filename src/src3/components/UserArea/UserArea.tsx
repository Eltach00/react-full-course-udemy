import styles from "./UserArea.module.css";
export function UserArea({ data }): JSX.Element {
  return (
    <div className={styles.container}>
      {data &&
        data.map((item) => (
          <div className={styles.element} key={item.id}>
            {item.name} - {item.age}
          </div>
        ))}
    </div>
  );
}
