import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import Media from "~/components/layout/Media";
import { Spacing } from "~/components/layout/Spacing";
import { media, theme } from "~/styles/theme";

export interface Notice {
  title: string;
  description: string;
  date: string;
}

export const Notices = ({ notices }: { notices: Notice[] }) => {
  return (
    <>
      <Media.Txt pc="heading.3" mobile="heading.4">
        공지
      </Media.Txt>
      <Media.Spacing pc={24} mobile={12} />
      <Contents>
        {notices.map((v) => (
          <Notice notice={v} />
        ))}
      </Contents>
    </>
  );
};

const Notice = ({ notice }: { notice: Notice }) => {
  const { title, description, date } = notice;
  return (
    <FlexBox
      fullWidth
      direction={"column"}
      align={"start"}
      css={containerStyle}
    >
      <FlexBox fullWidth justify={"space-between"}>
        <Txt typo="heading.3">{title}</Txt>
        <Txt typo="label.2" color="grey4">
          {date}
        </Txt>
      </FlexBox>
      <Spacing size={16} />
      <Txt typo="body.1">{description}</Txt>
    </FlexBox>
  );
};
const Contents = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.grey6};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey6};
`;

const containerStyle = css`
  ${media.pc} {
    cursor: pointer;
    padding: 24px 0;
    &:not(:last-of-type) {
      border-bottom: 1px solid ${theme.palette.grey6};
    }
  }

  ${media.mobile} {
    padding: 18px 0;
    &:not(:last-of-type) {
      border-bottom: 1px solid ${theme.palette.grey6};
    }
    &:not(:first-of-type) {
      margin-top: 12px;
      border-top: 1px solid ${theme.palette.grey6};
    }
  }
`;
