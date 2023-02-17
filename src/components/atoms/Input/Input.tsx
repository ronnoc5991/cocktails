import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import "./styles.css";

export type InputProps = BaseProps & {
  value: string;
  type: "text"; // TODO: allows for future expansion of atom
  onChange: (value: string) => void;
};

function Input({ value, type, onChange, className }: InputProps) {
  return (
    <input
      className={classNames("Input", className)}
      value={value}
      type={type}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default Input;
