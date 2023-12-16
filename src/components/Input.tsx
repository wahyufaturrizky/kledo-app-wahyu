import { InputInterface } from "../interface/Input";
import Text from "./Text";

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
  error,
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
      {error && (
        <Text className="text-[#EB5757] font-roboto mt-2 font-bold text-sm" label={error.message} />
      )}
    </div>
  );
};

export default Input;
