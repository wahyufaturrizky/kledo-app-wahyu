import { ButtonInterface } from "../interface/Button";

const Button = ({ ...props }: ButtonInterface) => {
  return <button {...props}>{props.label || "Text goes here"}</button>;
};

export default Button;
