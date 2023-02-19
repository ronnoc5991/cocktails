import classNames from "classnames";
import { BaseProps } from "../../types/BaseProps";
import RandomDrinkDisplay from "../../components/organisms/RandomDrinkDisplay/RandomDrinkDisplay";

const RANDOM_DRINK_COUNT = 15;

type Props = BaseProps;

function Home({ className }: Props) {
  return (
    <div className={classNames(className)}>
      <RandomDrinkDisplay count={RANDOM_DRINK_COUNT} />
    </div>
  );
}

export default Home;
