import classNames from "classnames";
import { Link } from "react-router-dom";
import { BaseProps } from "../../../types/BaseProps";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import "./styles.scss";

export type NavProps = BaseProps & {
  items: Array<{ path: string; icon: string; label: string }>;
};

function Nav({ items, className }: NavProps) {
  return (
    <nav className={classNames("Nav", className)}>
      <ul>
        {items.map(({ path, icon, label }, index) => (
          <li key={index}>
            <Link to={path}>
              <Text as="span" className="label">
                {label}
              </Text>
              <Image src={icon} alt={label} className="icon" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
