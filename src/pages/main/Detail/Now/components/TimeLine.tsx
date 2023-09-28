import styled from "@emotion/styled";
import Media from "~/components/layout/Media";
import { Padding } from "~/components/layout/Padding";
import { keyOfPalette, media } from "~/styles/theme";
import { TimeLineItem } from "./TimeLineItem";

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
