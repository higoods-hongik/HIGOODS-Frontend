import styled from "@emotion/styled";
import Media from "~/components/layout/Media";
import { Padding } from "~/components/layout/Padding";
import { ReactComponent as RecentCircle } from "~/assets/icon/recent-timeline.svg";
import { ReactComponent as PastCircle } from "~/assets/icon/past-timeline.svg";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import { css } from "@emotion/react";
import { keyOfPalette, media, theme } from "~/styles/theme";
import { Spacing } from "~/components/layout/Spacing";
import { useMediaQuery } from "react-responsive";

export interface TimeLine {
  date: string;
  title: string;
  description: string;
}

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

export const TimeLine = ({ timeLines }: { timeLines: TimeLine[] }) => {
  return (
    <>
      <Media.Txt pc="heading.3" mobile="heading.4">
        현황 타임라인
      </Media.Txt>
      <Media.Spacing pc={24} mobile={12} />
      <Contents size={[24, 0]}>
        {timeLines.map((v, i) => (
          <>
            <TimeLineItem timeLine={v} color={getColor(i, timeLines.length)} />
            {timeLines.length !== i + 1 && (
              <Media.Spacing pc={70} mobile={26} />
            )}
          </>
        ))}
        <Line length={timeLines.length - 1} />
      </Contents>
    </>
  );
};
const Contents = styled(Padding)`
  border-top: 1px solid ${({ theme }) => theme.palette.grey6};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey6};
  position: relative;
  ${media.pc} {
    padding-bottom: 56px;
  }
`;

export const TimeLineItem = ({
  timeLine,
  color,
}: {
  timeLine: TimeLine;
  color: keyOfPalette;
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const { date, title, description } = timeLine;
  return (
    <FlexBox
      css={css({
        position: "relative",
        color: theme.palette[color],
        paddingLeft: isMobile ? 75 : 0,
        gap: isMobile ? 8 : 0,
      })}
      align={"flex-start"}
      justify={"flex-start"}
    >
      <Txt
        typo="label.2"
        color={color === "black" ? "red" : color}
        css={css({ paddingTop: 1 })}
      >
        {date}
      </Txt>
      <div css={circlePosition}>
        {color === "black" ? <RecentCircle /> : <PastCircle />}
      </div>
      <FlexBox
        direction={"column"}
        gap={7.6}
        css={contentPosition}
        align={"flex-start"}
      >
        <Txt typo="heading.4" color={color}>
          {title}
        </Txt>
        {!isMobile && (
          <Txt typo="body.2" color={color}>
            {description}
          </Txt>
        )}
      </FlexBox>
    </FlexBox>
  );
};

const circlePosition = css`
  ${media.pc} {
    position: absolute;
    left: 79px;
  }
  ${media.mobile} {
    position: absolute;
    left: 41px;
  }
`;
const contentPosition = css`
  ${media.pc} {
    position: absolute;
    left: 113px;
  }
  ${media.mobile} {
    padding-top: 1px;
    left: 79px;
  }
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
    height: ${({ length }) => length * 50}px;
  }
`;
