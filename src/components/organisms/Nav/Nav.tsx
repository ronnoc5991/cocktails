import classNames from "classnames";
import { Link } from "react-router-dom";
import { BaseProps } from "../../../types/BaseProps";
import Text from "../../atoms/Text/Text";
import "./styles.css";

type Props = BaseProps & {};

function Nav({ className }: Props) {
  return (
    <nav className={classNames("Nav", className)}>
      <ul>
        <li>
          <Link to="/">
            <Text as="span" size="large">
              Home
            </Text>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <Text as="span" size="large">
              Search
            </Text>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
