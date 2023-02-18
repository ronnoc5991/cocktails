import classNames from "classnames";
import { Link } from "react-router-dom";
import { BaseProps } from "../../../types/BaseProps";
import Text from "../../atoms/Text/Text";
import "./styles.scss";

export type NavProps = BaseProps & {
  items: Array<{ path: string; label: string }>;
};

function Nav({ items, className }: NavProps) {
  return (
    <nav className={classNames("Nav", className)}>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>
              <Text as="span" size="medium">
                {item.label}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
