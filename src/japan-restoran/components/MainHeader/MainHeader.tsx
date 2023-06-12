import { useState } from "react";
import styles from "./MainHeader.module.css";
import { Modal } from "../Modal/Modal";
import CartButton from "./CartButton/CartButton";

const MainHeader = () => {
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
        <CartButton openModal={openModal} />
      </header>
    </>
  );
};

export default MainHeader;
