function Input({ ...props }) {
  let { className } = props;
  return (
    <div className={className}>
      {/* <div className="flex flex-col align-start mr-[1rem] mb-[1rem]"> */}
      {/* <h2 className="text-primary">Task Title</h2> */}
      <input type="text" className="" placeholder="Enter Task Title" />
      {/* </div> */}
    </div>
  );
}

export default Input;
