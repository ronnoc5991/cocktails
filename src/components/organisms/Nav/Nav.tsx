import classNames from "classnames";
import { Link } from "react-router-dom";
import paths from "../../../paths";
import { BaseProps } from "../../../types/BaseProps";
import Text from "../../atoms/Text/Text";
import "./styles.scss";

type Props = BaseProps & {};

function Nav({ className }: Props) {
  return (
    <nav className={classNames("Nav", className)}>
      <ul>
        <li>
          <Link to={paths.home}>
            <Text as="span" size="large">
              Home
            </Text>
          </Link>
        </li>
        <li>
          <Link to={paths["drink-search"]}>
            <Text as="span" size="large">
              Search for Drinks
            </Text>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
