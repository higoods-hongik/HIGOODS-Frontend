import styled from "@emotion/styled";
import { ComponentProps } from "react";
import { FlexBox } from "../atoms/layout/FlexBox";

export interface GongGuItemProps extends ComponentProps<"div"> {
  category?: string;
  title?: string;
  description?: string;
  process?: string;
  price?: number;
}

export const GongGuItemRow = ({
  category,
  title,
  description,
  process,
}: GongGuItemProps) => {
  return (
    <Wrapper gap={14}>
      <ContentsContainer
        direction={"column"}
        justify={"space-between"}
        align={"flex-start"}
      >
        <Contents>
          <GongGuCategory>{category}</GongGuCategory>
          <GongGuTitle>{title}</GongGuTitle>
          <GongGuDescription>{description}</GongGuDescription>
        </Contents>
        <GongGuProcess>{process}</GongGuProcess>
      </ContentsContainer>
      <ItemImage>
        <img src="" />
      </ItemImage>
    </Wrapper>
  );
};

const Wrapper = styled(FlexBox)`
  justify-content: space-between;
`;
const ContentsContainer = styled(FlexBox)`
  height: 144px;
`;
const Contents = styled.div`
  width: 144px;
  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 2; // 원하는 라인수
    -webkit-box-orient: vertical;
  }
`;

const GongGuCategory = styled.div`
  ${({ theme }) => theme.typo["label.2"]}
  color :${({ theme }) => theme.palette.grey4};
`;
const GongGuTitle = styled.div`
  ${({ theme }) => theme.typo["heading.4"]}
  color :${({ theme }) => theme.palette.black};
  margin-top: 6px;
`;
const GongGuDescription = styled.div`
  ${({ theme }) => theme.typo["body.2"]}
  color :${({ theme }) => theme.palette.grey4};
  margin-top: 6px;
`;
const GongGuProcess = styled.div`
  ${({ theme }) => theme.typo["label.2"]}
  color :${({ theme }) => theme.palette.red};
`;

const ItemImage = styled.div`
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  width: 144px;
  height: 144px;
  background: ${({ theme }) => theme.palette.grey2};
  box-sizing: border-box;

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.black};
  }
  img {
    object-fit: cover;
  }
`;
