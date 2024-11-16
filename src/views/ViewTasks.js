function ViewTasks({ tasks, ...props }) {
  return tasks.map((task, index) => (
    <div key={index}>
      Title is {task.title}
      Description is {task.description}
    </div>
  ));
}

export default ViewTasks;
