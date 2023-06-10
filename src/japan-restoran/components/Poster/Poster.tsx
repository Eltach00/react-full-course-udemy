import { Picture } from "./Picture/Picture";
import styles from "./Poster.module.css";

export function Poster(): JSX.Element {
  return (
    <>
      <Picture />
      <div className={styles.container}>
        <h2>Online Japanese Couisine </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias
          nam adipisci minima ipsa error officia earum nostrum eos. Temporibus
          et corporis eos ex eius mollitia quia odio quae corrupti!
        </p>
      </div>
    </>
  );
}
