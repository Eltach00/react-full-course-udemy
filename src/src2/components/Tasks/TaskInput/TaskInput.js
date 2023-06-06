import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";

const TaskInput = (props) => {
  const [inputText, setinputText] = useState("");
  const [valid, setValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValid(true);
    }
    setinputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setValid(false);
      return;
    }
    props.onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles["form-control"]}>
        <label>Задачи</label>
        <input
          className={!valid ? styles.invalid : ""}
          type="text"
          onChange={taskInputChangeHandler}
        />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;