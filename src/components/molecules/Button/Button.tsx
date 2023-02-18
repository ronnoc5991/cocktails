import {
  ButtonHTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import "./styles.scss";

type Props = BaseProps & {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function Button({
  type,
  onClick,
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames("Button", className)}
    >
      {children}
    </button>
  );
}

export default Button;
