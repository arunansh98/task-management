import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TextArea from "./components/TextArea";

function App() {
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
  }

  return (
    <div className="main">
      <div>
        <h1 className="text-center font-[500] mb-3 text-[50px] text-primary mb-[3rem]">
          Task Management
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div className="text-center">
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
              <button className={buttonClass + " bg-primary mx-[2rem]"}>
                Add Task
              </button>
              <button className={buttonClass + " bg-[#f3f3f3]"}>
                Clear All Tasks
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
