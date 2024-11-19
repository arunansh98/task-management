import ReactDOM from "react-dom";
import "./Modal.css";
import Input from "../Input";
import TextArea from "../TextArea";
import { useState } from "react";

function Modal({ ...props }) {
  const { setShowEditModal, activeTask, editTask } = props;
  const [title, setTitle] = useState(activeTask.title);
  const [description, setDesc] = useState(activeTask.description);
  const buttonClass =
    "!text-[grey] border-grey border-[1px] rounded-[10px] px-[1rem] py-[0.5rem] w-[20rem]";

  function handleTitleChange(event) {
    let value = event.target.value;
    setTitle(value);
  }

  function handleDescChange(event) {
    let value = event.target.value;
    setDesc(value);
  }

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="flex justify-end mr-4 mt-1">
          <button onClick={() => setShowEditModal(false)}>X</button>
        </div>
        <Input
          placeholder="Edit Task Title"
          className="mb-6"
          value={title}
          onChange={handleTitleChange}
        />
        <TextArea
          placeholder="Edit Task Description"
          className="mb-6"
          value={description}
          onChange={handleDescChange}
        />
        <button
          type="submit"
          className={buttonClass + " bg-primary mx-[2rem]"}
          onClick={() =>
            editTask(
              {
                title,
                description,
              },
              activeTask.id
            )
          }
        >
          Edit Task
        </button>
      </div>
    </div>,
    document.querySelector(".modal-root")
  );
}

export default Modal;
