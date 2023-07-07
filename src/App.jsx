import React, { useState } from "react";

import ColourPalette from "./components/ColourPalette";
import UserInputForm from "./components/UserInputForm";
import TaskList from "./components/TaskList";

function App() {
  const [colour, setColour] = useState("");
  const [taskList, setTaskList] = useState([]);

  const retrieveTaskAndSet = (task) => {
    setTaskList((prevTaskList) => {
      return [...prevTaskList, task];
    });
  };

  const retrieveColour = (input) => {
    setColour(input);
  };

  const handleRemoveTask = (taskId) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter((i) => i.taskId !== taskId);
    });
  };

  return (
    <>
      <ColourPalette retrieveColour={retrieveColour} />
      <UserInputForm colour={colour} retrieveTaskAndSet={retrieveTaskAndSet} />
      <TaskList
        colour={colour}
        taskList={taskList}
        handleRemoveTask={handleRemoveTask}
      />
    </>
  );
}

export default App;
