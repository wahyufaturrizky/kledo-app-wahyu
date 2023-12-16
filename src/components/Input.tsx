import { InputInterface } from "../interface/Input";

const Input = ({
  label,
  name,
  type,
  autoComplete,
  required,
  classNameInput,
  classNameLabel,
  onChange,
  onBlur,
  value,
  placeholder,
}: InputInterface) => {
  return (
    <div>
      <label htmlFor={name} className={classNameLabel}>
        {label}
      </label>
      <div className="mt-2">
        <input
          className={classNameInput}
          placeholder={placeholder}
          id={name}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
