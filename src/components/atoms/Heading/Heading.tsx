import { PropsWithChildren } from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { FontSize } from "../../../types/FontSize";
import { FontVariant } from "../../../types/FontVariant";
import "./styles.css";

export type HeadingProps = BaseProps & {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: FontSize;
  variant?: FontVariant;
};

function Heading({
  as,
  size = "medium",
  variant = "normal",
  className,
  children,
}: PropsWithChildren<HeadingProps>) {
  const Element = as;
  return (
    <Element className={classNames("Heading", size, variant, className)}>
      {children}
    </Element>
  );
}

export default Heading;
