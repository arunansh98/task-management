function TextArea({ ...props }) {
  let { className, value, onChange, placeholder } = props;
  return (
    <div className={className}>
      <textarea
        className="w-[27rem]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default TextArea;
