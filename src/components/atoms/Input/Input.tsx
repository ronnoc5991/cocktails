import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import "./styles.scss";

export type InputProps = BaseProps & {
  type: "text";
  value: string;
  onChange: (value: string) => void;
};

function Input({ type, value, onChange, className }: InputProps) {
  return (
    <input
      className={classNames("Input", className)}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default Input;
