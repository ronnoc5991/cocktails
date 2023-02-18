import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import "./styles.scss";

export type ContentSectionProps = BaseProps & {
  title: JSX.Element;
  body: JSX.Element;
};

function ContentSection({ title, body, className }: ContentSectionProps) {
  return (
    <div className={classNames("ContentSection", className)}>
      <div className="title-wrapper">{title}</div>
      {body}
    </div>
  );
}

export default ContentSection;
