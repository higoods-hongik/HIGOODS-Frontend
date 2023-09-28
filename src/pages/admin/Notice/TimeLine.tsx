import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import Button from "~/components/atoms/Button";
import { Txt } from "~/components/atoms/Txt";
import Input from "~/components/form/Input";
import { FlexBox } from "~/components/layout/FlexBox";
import { GridBox } from "~/components/layout/GridBox";
import { Padding } from "~/components/layout/Padding";
import { Spacing } from "~/components/layout/Spacing";
import { TimeLineItem } from "~/pages/main/Detail/Now/components/TimeLineItem";
import { palette } from "~/styles/palette";
import { keyOfPalette, media } from "~/styles/theme";

const getColor = (index: number, total: number): keyOfPalette => {
  switch (total - index - 1) {
    case 0:
      return "black";
    case 1:
      return "grey6";
    default:
      return "grey4";
  }
};

export const TimeLine = () => {
  const { register } = useForm<{ title: string; content: string }>();

  const timeLines = [
    {
      date: "23.04.23",
      description: "수요조사를 어쩌구",
      title: "수요조사",
    },
    {
      date: "23.04.23",
      description: "수요조사를 어쩌구",
      title: "수요조사",
    },
    {
      date: "23.04.23",
      description: "수요조사를 어쩌구",
      title: "수요조사",
    },
    {
      date: "23.04.23",
      description: "수요조사를 어쩌구",
      title: "수요조사",
    },
    {
      date: "23.04.23",
      description: "수요조사를 어쩌구",
      title: "수요조사",
    },
  ];

  return (
    <>
      <FlexBox gap={12} justify={"flex-start"}>
        <Txt typo="heading.1">현황 업데이트</Txt>
      </FlexBox>
      <Spacing size={44} />
      <GridBox gridTemplateColumns={"auto 252px"} gap={84}>
        <GridBox.Left>
          <Txt typo="heading.3">현황 타임라인</Txt>
          <Spacing size={16} />

          <Contents size={[24, 0]}>
            {timeLines.map((v, i) => (
              <>
                <TimeLineItem
                  timeLine={v}
                  color={getColor(i, timeLines.length)}
                />
                {timeLines.length !== i + 1 && <Spacing size={70} />}
              </>
            ))}
            <Line length={timeLines.length - 1} />
          </Contents>
          <Spacing size={36} />
          <Txt typo="heading.3">업데이트</Txt>
          <Spacing
            size={16}
            css={css({ borderBottom: `1px solid ${palette.black}` })}
          />
          <Spacing size={24} />
          <Txt typo="heading.4">현황 키워드</Txt>
          <Spacing size={8} />
          <Input
            placeholder="ex. 샘플 제작 중, 배송 준비 중"
            {...register("title")}
          />
          <Spacing size={24} />
          <Txt typo="heading.4">현황 상세 설명</Txt>
          <Spacing size={8} />
          <Input placeholder="내용을 입력하세요." {...register("content")} />
        </GridBox.Left>
        <GridBox.Right>
          <Spacing size={40} />
          <NoticeBox>
            <Txt color="red" typo="heading.4" as="div">
              현황 가이드
            </Txt>
            <Spacing size={12} />
            <Txt typo="body.2">
              현재 공구의 진행 상황을 키워드로
              <br />
              알려주세요. 업데이트된 사항은 공구
              <br />
              페이지에 업로드돼요.
            </Txt>
          </NoticeBox>
        </GridBox.Right>
      </GridBox>
      <Spacing size={60} />
      <FlexBox>
        <Button color="red" size="lg" width={312}>
          업로드하기
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

const Contents = styled(Padding)`
  border-top: 1px solid ${({ theme }) => theme.palette.grey6};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey6};
  position: relative;
  z-index: -1;
  padding-bottom: 56px;
`;

const Line = styled.div<{ length: number }>`
  width: 1px;
  position: absolute;
  top: 35px;
  z-index: -1;

  background: ${({ theme }) =>
    `linear-gradient(${theme.palette.grey4}, ${theme.palette.black})`};

  ${media.pc} {
    left: 83.5px;
    height: ${({ length }) => length * 91}px;
  }
  ${media.mobile} {
    left: 45.5px;
    height: ${({ length }) => length * 49}px;
  }
`;
