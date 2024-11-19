import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

function ViewTasks({ tasks, ...props }) {
  return tasks.map((task, index) => {
    let { title, description } = task;
    let { deleteTask, openEditTaskModal } = props;
    return (
      <div key={index} className="flex justify-center">
        <div key={title} className="mr-[2rem]">
          Title is {title}
        </div>
        <div key={description} className="mr-[2rem]">
          Description is {description}
        </div>
        <button onClick={() => deleteTask(index)} className="mr-5">
          <RiDeleteBin6Line />
        </button>
        <button>
          <MdEdit onClick={() => openEditTaskModal(index)} />
        </button>
      </div>
    );
  });
}

export default ViewTasks;
