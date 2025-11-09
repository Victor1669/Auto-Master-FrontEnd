export default function Form({
  children,
  title,
  onSubmit,
  className = "",
  btnClassName = "",
  btnText,
  messageLink = <></>,
}) {
  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      {title && <h3>{title}</h3>}
      {children}
      {btnText && (
        <button className={`form-btn ${btnClassName}`}>{btnText}</button>
      )}
      {messageLink}
    </form>
  );
}

export function Field({
  label,
  labelClassName = "",
  inputType = "text",
  inputRef,
  value,
  dispatch,
  type,
}) {
  const autoCompleteType =
    inputType === "password"
      ? "current-password"
      : inputType === "email"
      ? "email"
      : "name";

  return (
    <label className={labelClassName}>
      <span>{label}</span>
      <input
        ref={inputRef}
        name={crypto.randomUUID()}
        value={value}
        onChange={(e) => dispatch({ type, payload: e.target.value })}
        type={inputType}
        autoComplete={autoCompleteType}
      />
    </label>
  );
}
