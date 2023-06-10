import { useState } from "react";
import styles from "./MainHeader.module.css";
import { Modal } from "../Modal/Modal";

const MainHeader = ({ cartAmount }) => {
  const [modal, setModal] = useState(false);
  const modaleClose = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      {modal && <Modal modaleClose={modaleClose} />}
      <header className={styles["main-header"]}>
        <h1>Japan Restaurant - Kuso Yaro!</h1>
        <div className={styles.cart} onClick={openModal}>
          Cart <span>{cartAmount}</span>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
