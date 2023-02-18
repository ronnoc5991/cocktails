import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import Heading, { HeadingProps } from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import ContentSection from "../../molecules/ContentSection/ContentSection";

export type DrinkBasicInfoProps = BaseProps & {
  name: string;
  category: string;
  alcoholic: string;
  nameAs: HeadingProps["as"];
};

function DrinkBasicInfo({
  name,
  category,
  alcoholic,
  nameAs,
  className,
}: DrinkBasicInfoProps) {
  const title = (
    <Heading as={nameAs} size="large" variant="bold">
      {name}
    </Heading>
  );

  const body = (
    <>
      <Text as="span" variant="normal-italic">
        {category}
      </Text>
      <Text as="span" variant="normal-italic">
        {alcoholic}
      </Text>
    </>
  );

  return (
    <ContentSection
      title={title}
      body={body}
      className={classNames(className)}
    />
  );
}

export default DrinkBasicInfo;
