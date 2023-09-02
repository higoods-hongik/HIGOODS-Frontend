import styled from "@emotion/styled";
import { GongGuItemProps } from ".";

const GongGuItemWide = ({
  category,
  title,
  description,
  process,
  price,
}: GongGuItemProps) => {
  return (
    <Wrapper>
      <Contents>
        <GongGuCategory>{category}</GongGuCategory>
        <GongGuTitle>{title}</GongGuTitle>
        <GongGuDescription>{description}</GongGuDescription>
        <GongGuProcess>{process}</GongGuProcess>
        <GongGuPrice>{price?.toLocaleString("ko-KR")}원</GongGuPrice>
      </Contents>
      <ItemImage imageUrl={""} />
    </Wrapper>
  );
};

export default GongGuItemWide;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  &:not(:first-of-type) {
    padding-top: 24px;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey2};
  }
`;

const Contents = styled.div`
  width: calc(100% - 158px);
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
  margin-top: 21px;
`;
const GongGuPrice = styled.div`
  ${({ theme }) => theme.typo["heading.4"]}
  color :${({ theme }) => theme.palette.black};
  margin-top: 10px;
`;
const ItemImage = styled.div<{ imageUrl: string }>`
  width: 144px;
  height: 144px;
  background: ${({ theme }) => theme.palette.grey2};
  background-image: url(${({ imageUrl }) => imageUrl});
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.black};
  }
`;
