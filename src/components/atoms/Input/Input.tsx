import { HTMLInputTypeAttribute } from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import "./styles.css";

type Props = BaseProps & {
  value: string;
  type: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
};

function Input({ value, type, onChange, className }: Props) {
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
