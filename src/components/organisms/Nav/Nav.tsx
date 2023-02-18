import classNames from "classnames";
import { Link } from "react-router-dom";
import { BaseProps } from "../../../types/BaseProps";
import Image from "../../atoms/Image/Image";
import "./styles.scss";

export type NavProps = BaseProps & {
  items: Array<{ path: string; icon: string; iconAlt: string }>;
};

function Nav({ items, className }: NavProps) {
  return (
    <nav className={classNames("Nav", className)}>
      <ul>
        {items.map(({ path, icon, iconAlt }, index) => (
          <li key={index}>
            <Link to={path}>
              <Image src={icon} alt={iconAlt} className="icon" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
