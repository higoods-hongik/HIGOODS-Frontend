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

export const GongGuItemMobile = ({
  category,
  title,
  description,
  process,
}: GongGuItemProps) => {
  return (
    <Wrapper gap={14}>
      <Contents>
        <GongGuCategory>{category}</GongGuCategory>
        <GongGuTitle>{title}</GongGuTitle>
        <GongGuDescription>{description}</GongGuDescription>
        <GongGuProcess>{process}</GongGuProcess>
      </Contents>
      <ItemImage>
        <img src="" />
      </ItemImage>
    </Wrapper>
  );
};

const Wrapper = styled(FlexBox)`
  justify-content: space-between;
  padding-bottom: 12px;
  margin-top: 12px;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey2};
  }
`;

const Contents = styled.div`
  width: calc(100vw - 151px);
  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const GongGuCategory = styled.div`
  ${({ theme }) => theme.typo["label.3"]}
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
  ${({ theme }) => theme.typo["label.3"]}
  color :${({ theme }) => theme.palette.red};
  margin-top: 15px;
`;

const ItemImage = styled.div`
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  width: 105px;
  height: 105px;
  background: ${({ theme }) => theme.palette.grey2};
  img {
    object-fit: cover;
  }
`;
