import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import Heading, { HeadingProps } from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";

export type DrinkBasicInfoProps = BaseProps & {
  name: string;
  nameAs: HeadingProps["as"];
  category: string;
  alcoholic: string;
};

function DrinkBasicInfo({
  name,
  category,
  alcoholic,
  nameAs,
  className,
}: DrinkBasicInfoProps) {
  return (
    <div className={classNames(className)}>
      <Heading as={nameAs} size="large" variant="bold">
        {name}
      </Heading>
      {category && (
        <Text as="span" variant="normal-italic">
          {category}
        </Text>
      )}
      {alcoholic && (
        <Text as="span" variant="normal-italic">
          {alcoholic}
        </Text>
      )}
    </div>
  );
}

export default DrinkBasicInfo;
