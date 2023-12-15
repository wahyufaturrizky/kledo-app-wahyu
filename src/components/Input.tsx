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
}: InputInterface) => {
  return (
    <div>
      <label htmlFor={name} className={classNameLabel}>
        {label}
      </label>
      <div className="mt-2">
        <input
          className={classNameInput}
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
