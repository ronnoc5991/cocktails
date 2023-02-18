import { PropsWithChildren } from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import "./styles.scss";

export type CardDisplayProps = BaseProps;

function CardDisplay({
  children,
  className,
}: PropsWithChildren<CardDisplayProps>) {
  return <div className={classNames("CardDisplay", className)}>{children}</div>;
}

export default CardDisplay;
