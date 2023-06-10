import React, { useState } from "react";

function App() {
  const taskData = [];

  const [taskList, setTaskList] = useState(taskData);
  const [taskDescription, setTaskDescription] = useState("");
  const [dateComplete, setDateComplete] = useState("");
  const [datePosted, setDatePosted] = useState("");

  const submitHandler = (event) => {
    console.log("Test");
    event.preventDefault();
    let task = {
      taskDescription: taskDescription,
      taskComplete: dateComplete,
      taskPosted: datePosted,
    };

    setTaskList((prevTaskList) => {
      return [...prevTaskList, task];
    });

    setTaskDescription("");
  };

  const handleTaskName = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleDateComplete = (e) => {
    setDateComplete(e.target.value);
  };

  const handleDatePosted = (e) => {
    setDatePosted(e.target.value);
  };

  return (
    <>
      <h1>Task List</h1>
      <form onSubmit={submitHandler}>
        <label>
          Goal To Do
          <input
            type="text"
            onChange={handleTaskName}
            value={taskDescription}
          ></input>
        </label>
        <label>
          Date to complete by
          <input type="date" onChange={handleDateComplete}></input>
        </label>
        <label>
          Date Added
          <input type="date" onChange={handleDatePosted}></input>
        </label>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {taskList.map((task) => {
          return (
            <>
              <p>{task.taskDescription}</p>
              <p>{task.tastComplete}</p>
              <p>{task.taskPosted}</p>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default App;
