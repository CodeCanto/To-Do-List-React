import React, { useState } from "react";
import styles from "./UserInputForm.module.css";

const UserInputForm = (props) => {
  const [taskDescription, setTaskDescription] = useState("");
  const [dateComplete, setDateComplete] = useState("");
  const [timeComplete, setTimeComplete] = useState("");
  const [task, setTask] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    setTask({
      taskId: Math.random() * 100,
      taskDescription: taskDescription,
      taskCompleteDate: new Date(dateComplete).toLocaleDateString(),
      taskCompleteTime: timeComplete,
      taskPostedDate: new Date().toLocaleDateString(),
      taskPostedTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
    });

    props.retrieveTaskAndSet(task);

    setTaskDescription("");
  };

  const handleTaskName = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleDateComplete = (e) => {
    console.log(e.target.value);
    setDateComplete(e.target.value);
  };

  const handleTimeComplete = (e) => {
    setTimeComplete(e.target.value);
  };

  return (
    <form
      className={styles.form}
      style={{ backgroundColor: props.colour }}
      onSubmit={submitHandler}
    >
      <h1 className={styles.header} style={{ backgroundColor: props.colour }}>
        To Do List
      </h1>
      <label className={styles.label} style={{ backgroundColor: props.colour }}>
        Task
      </label>
      <input
        type="text"
        onChange={handleTaskName}
        value={taskDescription}
        className={styles.input}
      ></input>
      <label className={styles.label} style={{ backgroundColor: props.colour }}>
        Time to complete by
      </label>
      <input
        type="time"
        onChange={handleTimeComplete}
        className={styles.input}
      ></input>
      <label className={styles.label} style={{ backgroundColor: props.colour }}>
        Completion Date
      </label>
      <input
        type="date"
        onChange={handleDateComplete}
        className={styles.input}
      ></input>

      <button type="submit" className={styles.button}>
        Add Task
      </button>
    </form>
  );
};

export default UserInputForm;
