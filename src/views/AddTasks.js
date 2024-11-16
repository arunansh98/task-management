import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { useState } from "react";

function AddTasks({ ...props }) {
  let { className, addTask, clearAllTasks } = props;
  const buttonClass =
    "!text-[grey] border-grey border-[1px] rounded-[10px] px-[1rem] py-[0.5rem] w-[20rem]";

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  function handleTitleChange(event) {
    let value = event.target.value;
    setTitle(value);
  }

  function handleDescriptionChange(event) {
    let value = event.target.value;
    setDescription(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    addTask({
      title,
      description,
    });
  }
  return (
    <form onSubmit={handleFormSubmit} onReset={clearAllTasks}>
      <div className={className + " text-center"}>
        <Input
          className="mb-[1.5rem]"
          value={title}
          onChange={handleTitleChange}
        />
        <TextArea
          className="mb-[1.5rem]"
          value={description}
          onChange={handleDescriptionChange}
        />
        <div>
          <button
            type="submit"
            className={buttonClass + " bg-primary mx-[2rem]"}
          >
            Add Task
          </button>
          <button type="reset" className={buttonClass + " bg-[#f3f3f3]"}>
            Clear All Tasks
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTasks;
