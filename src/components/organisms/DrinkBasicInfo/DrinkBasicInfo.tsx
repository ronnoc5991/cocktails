import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import Heading, { HeadingProps } from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import ContentSection from "../../molecules/ContentSection/ContentSection";

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
    <ContentSection
      title={
        <Heading as={nameAs} size="small" variant="bold">
          {name}
        </Heading>
      }
      body={
        <>
          <Text as="span" variant="normal-italic">
            {category}
          </Text>
          <Text as="span" variant="normal-italic">
            {alcoholic}
          </Text>
        </>
      }
      className={classNames(className)}
    />
  );
}

export default DrinkBasicInfo;
