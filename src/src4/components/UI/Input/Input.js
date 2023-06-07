import React, { useImperativeHandle, useRef } from "react";
import styles from "./Input.module.css";

export const Input = React.forwardRef(
  ({ name, state, changeHandler, validateHandler }, ref) => {
    const inputRef = useRef();
    const activate = () => {
      inputRef.current.focus();
    };
    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });
    return (
      <div
        className={`${styles.control} ${
          state.isValid === false ? styles.invalid : ""
        }`}>
        <label htmlFor={name}>{name}</label>
        <input
          ref={inputRef}
          type={name}
          id={name}
          value={state.value}
          onChange={changeHandler}
          onBlur={validateHandler}
        />
      </div>
    );
  }
);
