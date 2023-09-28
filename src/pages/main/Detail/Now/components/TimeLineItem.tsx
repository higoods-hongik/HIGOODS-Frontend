import { keyOfPalette, media, theme } from "~/styles/theme";
import { TimeLine } from "./TimeLine";
import { css } from "@emotion/react";
import { useMediaQuery } from "react-responsive";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import { ReactComponent as RecentCircle } from "~/assets/icon/recent-timeline.svg";
import { ReactComponent as PastCircle } from "~/assets/icon/past-timeline.svg";

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
