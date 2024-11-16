import { RiDeleteBin6Line } from "react-icons/ri";

function ViewTasks({ tasks, ...props }) {
  return tasks.map((task, index) => {
    let { title, description } = task;
    let { deleteTask } = props;
    return (
      <div key={index} className="flex">
        <div key={title} className="mr-[2rem] text-red">
          Title is {title}
        </div>
        <div key={description} className="mr-[2rem]">
          Description is {description}
        </div>
        <button onClick={() => deleteTask(index)}>
          <RiDeleteBin6Line />
        </button>
      </div>
    );
  });
}

export default ViewTasks;
