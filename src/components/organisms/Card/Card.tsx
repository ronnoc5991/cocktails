import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import "./styles.scss";

export type CardProps = BaseProps & {
  image: JSX.Element;
  content: JSX.Element;
};

function Card({ image, content, className }: CardProps) {
  return (
    <div className={classNames("Card", className)}>
      {image}
      {content}
    </div>
  );
}

export default Card;
