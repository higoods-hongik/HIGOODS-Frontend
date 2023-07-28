import styled from "@emotion/styled";
import { GongGuItemProps } from ".";

export const GongGuItemCol = ({
  category,
  title,
  description,
  process,
  price,
}: GongGuItemProps) => {
  return (
    <Wrapper>
      <ItemImage imageUrl={""} />
      <Contents>
        <GongGuCategory>{category}</GongGuCategory>
        <GongGuTitle>{title}</GongGuTitle>
        <GongGuDescription>{description}</GongGuDescription>
      </Contents>
      <Devider />
      <GongGuProcess>{process}</GongGuProcess>
      <GongGuPrice>{price?.toLocaleString("ko-KR")}원</GongGuPrice>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  margin-top: 20px;
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
  ${({ theme }) => theme.typo["heading.3"]}
  color :${({ theme }) => theme.palette.black};
  margin-top: 8px;
`;
const GongGuDescription = styled.div`
  ${({ theme }) => theme.typo["body.2"]}
  color :${({ theme }) => theme.palette.grey4};
  margin-top: 8px;
`;
const GongGuProcess = styled.div`
  ${({ theme }) => theme.typo["label.2"]}
  color :${({ theme }) => theme.palette.red};
`;
const GongGuPrice = styled.div`
  ${({ theme }) => theme.typo["heading.4"]}
  color :${({ theme }) => theme.palette.black};
  margin-top: 8px;
`;

const ItemImage = styled.div<{ imageUrl: string }>`
  padding-top: calc(100% - 2px);
  background: ${({ theme }) => theme.palette.grey2};
  background-image: url(${({ imageUrl }) => imageUrl});
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.black};
  }
`;

const Devider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.grey2};
  margin: 14px 0;
`;
