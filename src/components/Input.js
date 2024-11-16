function Input({ ...props }) {
  let { className, value, onChange } = props;
  return (
    <div className={className}>
      {/* <div className="flex flex-col align-start mr-[1rem] mb-[1rem]"> */}
      {/* <h2 className="text-primary">Task Title</h2> */}
      <input
        type="text"
        value={value}
        placeholder="Enter Task Title"
        onChange={onChange}
      />
      {/* </div> */}
    </div>
  );
}

export default Input;
