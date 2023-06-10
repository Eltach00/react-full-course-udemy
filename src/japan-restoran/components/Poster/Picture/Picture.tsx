import styles from "./Picture.module.css";
import img from "./sushi.jpg";
export function Picture(): JSX.Element {
  return (
    <div className={styles.img}>
      <img src={img} alt="sushi" />
    </div>
  );
}
