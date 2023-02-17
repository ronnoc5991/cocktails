import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import ContentSection from "../../molecules/ContentSection/ContentSection";

type Props = BaseProps & {
  instructions: string;
};

function DrinkInstructions({ instructions, className }: Props) {
  const title = (
    <Heading as="h2" variant="bold" className="heading">
      Instructions
    </Heading>
  );

  const body = <Text as="p">{instructions}</Text>;

  return (
    <ContentSection
      title={title}
      body={body}
      className={classNames(className)}
    />
  );
}

export default DrinkInstructions;
