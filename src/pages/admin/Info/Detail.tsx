import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "~/components/atoms/Button";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import { GridBox } from "~/components/layout/GridBox";
import { Spacing } from "~/components/layout/Spacing";
import TextEditor from "~/components/text-editor";

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState(" ");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FlexBox gap={12} justify={"flex-start"}>
        <Txt typo="heading.1">상세 정보 이력</Txt>
        <Txt typo="heading.4" color="red">
          (3/3 단계)
        </Txt>
      </FlexBox>
      <Spacing size={24} />
      <GridBox gridTemplateColumns={"auto 252px"} gap={84}>
        <GridBox.Left>
          <Txt typo="heading.4" as="div">
            공구 프로젝트에 대한 설명을 작성해주세요.
          </Txt>
          <Spacing size={22} />
          <div css={css({ position: "relative", zIndex: -1, width: 648 })}>
            <TextEditor setContent={setContent} content={content} />
          </div>
        </GridBox.Left>
        <GridBox.Right>
          <Spacing size={44} />
          <NoticeBox>
            <Txt color="red" typo="heading.4" as="div">
              설명 작성 가이드
            </Txt>
            <Spacing size={12} />
            <Txt typo="body.2">
              진행하려는 공구에 대한 설명을
              <br />
              적어주세요. 자세하게 쓸수록 구매에
              <br />
              도움이 돼요.
            </Txt>
          </NoticeBox>
        </GridBox.Right>
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
          onClick={() => navigate(`/admin/${id}/form`)}
        >
          다음으로
        </Button>
      </FlexBox>
      <Spacing size={100} />
    </>
  );
};

const NoticeBox = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.palette.grey1};
`;
