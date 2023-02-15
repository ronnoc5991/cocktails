import { HTMLInputTypeAttribute } from "react";
import "./styles.css";

type Props = {
  value: string;
  type: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
};

function Input({ value, type, onChange }: Props) {
  return (
    <input
      value={value}
      type={type}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default Input;
