import styles from "./Modal.module.css";
export function Modal({ modaleClose }): JSX.Element {
  const outsideHandle = (e) => {
    const div = e.target as HTMLDivElement;
    if (div.dataset.id === "modal") {
      modaleClose();
    }
  };
  return (
    <div onClick={outsideHandle} data-id="modal" className={styles.modal}>
      <div className={styles.container}>
        <h1 className={styles.header}>Uncorrect</h1>
        <div className={styles.body}>
          <p>Input can't be empty</p>
          <button className={styles.btn} onClick={modaleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
