import React from "react";
import styles from "./Input.module.scss";
export const Input = React.forwardRef(({ inp, label }: any, ref): any => {
  return (
    <div className={styles.inp}>
      <label htmlFor={inp.id}>{label}</label>
      <input ref={ref} {...inp} />
    </div>
  );
});
