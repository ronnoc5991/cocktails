import { PropsWithChildren } from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import "./styles.scss";

export type ListProps = BaseProps & {
  as: "ol" | "ul";
};

function List({ as, children, className }: PropsWithChildren<ListProps>) {
  const Element = as;

  return (
    <Element
      className={classNames(
        "List",
        { "is-ordered": as === "ol", "is-unordered": as === "ul" },
        className
      )}
    >
      {children}
    </Element>
  );
}

export default List;
