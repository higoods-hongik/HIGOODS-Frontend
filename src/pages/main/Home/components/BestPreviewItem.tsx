import styled from "@emotion/styled";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";

export interface BestPreviewProps {
  imageUrl?: string;
  title: string;
  description: string;
}

const BestPreviewItem = ({
  imageUrl,
  title,
  description,
}: BestPreviewProps) => {
  return (
    <Wrapper>
      <ItemImage>
        <img src={imageUrl} />
      </ItemImage>
      <Contents
        direction={"column"}
        gap={8}
        justify={"space-between"}
        align={"flex-start"}
      >
        <Txt typo="heading.4">{title}</Txt>
        <Txt typo="body.2" color="grey4">
          {description}
        </Txt>
      </Contents>
    </Wrapper>
  );
};

export default BestPreviewItem;

const Wrapper = styled.div`
  width: 100%;
`;

const ItemImage = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  width: 100%;
  background: ${({ theme }) => theme.palette.grey2};
  img {
    object-fit: cover;
  }
`;

const Contents = styled(FlexBox)`
  margin-top: 9px;
  height: 52px;
`;
