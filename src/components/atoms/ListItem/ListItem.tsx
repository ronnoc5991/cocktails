import { PropsWithChildren } from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";

export type ListItemProps = BaseProps;

function ListItem({ children, className }: PropsWithChildren<ListItemProps>) {
  return <li className={classNames(className)}>{children}</li>;
}

export default ListItem;
