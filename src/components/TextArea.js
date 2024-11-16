function TextArea({ ...props }) {
  let { className, value, onChange } = props;
  return (
    <div className={className}>
      {/* <h2 className="text-primary">Task Description</h2> */}
      <textarea
        className="w-[27rem]"
        placeholder="Enter Task Description"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default TextArea;
