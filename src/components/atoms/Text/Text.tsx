import { PropsWithChildren } from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { FontSize } from "../../../types/FontSize";
import { FontVariant } from "../../../types/FontVariant";
import "./styles.css";

type Props = BaseProps & {
  as: "p" | "span";
  size?: FontSize;
  variant?: FontVariant;
};

function Text({
  as,
  size = "medium",
  variant = "normal",
  className,
  children,
}: PropsWithChildren<Props>) {
  const Element = as;

  return (
    <Element className={classNames("Text", size, variant, className)}>
      {children}
    </Element>
  );
}

export default Text;
