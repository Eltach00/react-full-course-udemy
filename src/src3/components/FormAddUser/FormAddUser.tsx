import { useState } from "react";
import styles from "./FormAddUser.module.css";
import { Modal } from "../Modal/Modal";

export function FormAddUser({ getData }): JSX.Element {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const inputNameHandler = (e) => {
    setName(e.target.value);
  };

  const inputAgeHandler = (e) => {
    if (!parseInt(e.target.value) && e.target.value) {
      return;
    }
    setAge(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (!name || !age) {
      setModalActive(true);
      return;
    }
    const data = { name, age, id: Math.random() };
    getData(data);
  };

  const modaleClose = () => {
    setModalActive(false);
  };
  return (
    <>
      {modalActive && <Modal modaleClose={modaleClose} />}
      <div className={styles.container}>
        <form onSubmit={submitHandle} className={styles.form}>
          <div className={styles["form-control"]}>
            <label>Enter Name</label>
            <input value={name} onChange={inputNameHandler} type="text" />
          </div>
          <div className={styles["form-control"]}>
            <label>Enter Age</label>
            <input value={age} onChange={inputAgeHandler} type="text" />
          </div>
          <button type="submit" className={styles.btn}>
            Add user
          </button>
        </form>
      </div>
    </>
  );
}
