import classNames from "classnames";
import RandomDrinkDisplay from "../../components/organisms/RandomDrinkDisplay/RandomDrinkDisplay";
import { BaseProps } from "../../types/BaseProps";
import "./styles.css";

const RANDOM_DRINK_COUNT = 10;

type Props = BaseProps & {};

function Home({ className }: Props) {
  return (
    <div className={classNames("Home", className)}>
      <RandomDrinkDisplay count={RANDOM_DRINK_COUNT} />
    </div>
  );
}

export default Home;
