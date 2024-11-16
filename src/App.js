import "./App.css";
import AddTasks from "./views/AddTasks";
import ViewTasks from "./views/ViewTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  /**
   * @description function to add a task
   * @param expects task as an object in the form of { title: "". description: "" }
   */
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function clearAllTasks() {
    setTasks([]);
  }

  function deleteTask(id) {
    let filteredTasks = tasks.filter((_task, index) => id !== index);
    setTasks(filteredTasks);
  }

  return (
    <div className="main">
      <div>
        <h1 className="text-center font-[500] mb-3 text-[50px] text-primary mb-[3rem]">
          Task Management
        </h1>
        <AddTasks
          addTask={addTask}
          clearAllTasks={clearAllTasks}
          className="mb-[4rem]"
        />
        <ViewTasks tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
