import "./App.css";
import Modal from "./components/Modal";
import AddTasks from "./views/AddTasks";
import ViewTasks from "./views/ViewTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showEditModal, setShowEditModal] = useState(false);

  /**
   * @description function to add a task
   * @param expects task as an object in the form of { title: "". description: "" }
   */
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  /**
   * @description function to clear all tasks
   *
   */
  function clearAllTasks() {
    setTasks([]);
  }

  /**
   * @description function to delete a task
   * @param expects id of the task to be deleted
   */
  function deleteTask(id) {
    let filteredTasks = tasks.filter((_task, index) => id !== index);
    setTasks(filteredTasks);
  }

  function editTask(id) {
    setShowEditModal(true);
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
        <ViewTasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
        {showEditModal && <Modal setShowEditModal={setShowEditModal} />}
      </div>
    </div>
  );
}

export default App;
