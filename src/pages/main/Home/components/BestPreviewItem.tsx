import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { GongGuItemProps } from "~/components/GongGuItem";
import SquareImage from "~/components/atoms/SquareImage";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";

const BestPreviewItem = ({
  imageUrl,
  title,
  description,
  id,
}: GongGuItemProps) => {
  return (
    <Wrapper to={`/goods/${id}`}>
      <SquareImage imageUrl={imageUrl} />
      <Contents
        direction={"column"}
        gap={8}
        justify={"space-between"}
        align={"flex-start"}
      >
        <Title typo="heading.4" as="div">
          {title}
        </Title>
        <Txt typo="body.2" color="grey4">
          {description}
        </Txt>
      </Contents>
    </Wrapper>
  );
};

export default BestPreviewItem;

const Wrapper = styled(Link)`
  width: 100%;
`;

const Contents = styled(FlexBox)`
  margin-top: 9px;
  width: 100%;
`;

const Title = styled(Txt)`
  display: block;
  word-break: break-word;
`;
