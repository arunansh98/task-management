function Input({ ...props }) {
  let { className, value, onChange, placeholder } = props;
  return (
    <div className={className}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
