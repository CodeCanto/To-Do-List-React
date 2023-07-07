import React from "react";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
  return (
    <ul className={styles.list}>
      {props.taskList.map((task, index) => {
        return (
          <li
            key={index}
            className={styles.li}
            style={{ backgroundColor: props.colour }}
            onClick={() => props.handleRemoveTask(task.taskId)}
          >
            <p
              className={styles.paragraph}
              style={{ backgroundColor: props.colour }}
            >
              Task: {task.taskDescription}
            </p>
            <p
              className={styles.paragraph}
              style={{ backgroundColor: props.colour }}
            >
              Complete by: {task.taskCompleteDate}
            </p>
            <p
              className={styles.paragraph}
              style={{ backgroundColor: props.colour }}
            >
              At: {task.timeComplete}
            </p>
            <p
              className={styles.paragraph}
              style={{ backgroundColor: props.colour }}
            >
              Posted: {task.taskPostedDate}
            </p>
            <p
              className={styles.paragraph}
              style={{ backgroundColor: props.colour }}
            >
              At: {task.taskPostedTime}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
