import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import Button from "~/components/atoms/Button";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import { GridBox } from "~/components/layout/GridBox";
import { Spacing } from "~/components/layout/Spacing";

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <FlexBox gap={12} justify={"flex-start"}>
        <Txt typo="heading.1">상품 정보 이력</Txt>
        <Txt typo="heading.4" color="red">
          (2/3 단계)
        </Txt>
      </FlexBox>
      <Spacing size={24} />
      <GridBox gridTemplateColumns={"auto 252px"} gap={84}>
        <그리드_왼쪽영역>
          <Txt typo="heading.4" required as="div">
            상품명을 입력해주세요.
          </Txt>
        </그리드_왼쪽영역>
        <그리드_오른쪽영역>
          <Spacing size={102} />
          <NoticeBox>
            <Txt color="red" typo="heading.4" as="div">
              옵션 설정 가이드
            </Txt>
            <Spacing size={12} />
            <Txt typo="body.2">
              상품의 종류가 여러 개인가요?
              <br />
              옵션을 입력해서 공구 참여자들이
              <br />
              원하는 선택지를 고르게 할 수 있고,
              <br />
              선택지별로 가격 설정도 가능해요.
            </Txt>
            <Spacing size={12} />
            <Txt typo="body.2" color="grey4">
              ex. 의류 상품 {">"} '사이즈' 옵션 추가
              <br />
              {"        >"} S, M, L 선택지 추가
            </Txt>
          </NoticeBox>
        </그리드_오른쪽영역>
      </GridBox>
      <Spacing size={60} />
      <FlexBox gap={24}>
        <Button color="red20" size="lg" width={312}>
          저장하기
        </Button>
        <Button
          color="red"
          size="lg"
          width={312}
          onClick={() => navigate(`/admin/${id}/info/detail`)}
        >
          다음으로 (2/3)
        </Button>
      </FlexBox>
      <Spacing size={100} />
    </>
  );
};

const 그리드_왼쪽영역 = styled.div``;
const 그리드_오른쪽영역 = styled.div``;

const NoticeBox = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.palette.grey1};
`;
