import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import "./styles.css";

type Props = BaseProps & {};

function Button({ className }: Props) {
  return <button className={classNames("Button", className)}></button>;
}

export default Button;
