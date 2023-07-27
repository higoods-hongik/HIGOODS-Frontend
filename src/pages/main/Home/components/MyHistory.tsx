import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import Media from "~/components/layout/Media";
import MediaQuery from "~/components/layout/Media";
import { Spacing } from "~/components/layout/Spacing";
import { media } from "~/styles/theme";

interface MyHistoryProps {
  title: string;
  description: string;
  process: string;
  updateNotice: string;
  date: string;
}

const MyHistory = ({
  title,
  description,
  process,
  updateNotice,
  date,
}: MyHistoryProps) => {
  return (
    <>
      <Wrapper>
        <Media.Padding mobile={0} pc={[14, 16]}>
          <Txt typo="heading.4">{title}</Txt>
          <Media.Spacing mobile={6} pc={10} />
          <FlexBox justify={"space-between"}>
            <Txt typo="label.2" color="grey4">
              {description}
            </Txt>
            <Txt typo="label.2" color="red">
              {process}
            </Txt>
          </FlexBox>
        </Media.Padding>
        <MediaQuery.PC>
          <Devider />
        </MediaQuery.PC>
        <Media.Mobile>
          <Spacing size={14} />
        </Media.Mobile>
        <Media.Padding mobile={0} pc={[14, 16]}>
          <UpdateNotice typeof="body.2">{updateNotice}</UpdateNotice>
          <Spacing size={8} />
          <FlexBox justify={"space-between"}>
            <Txt typo="label.2" color="grey4">
              {date}
            </Txt>
            <Media.Mobile>
              <StyledLink to="/">자세히 보러가기</StyledLink>
            </Media.Mobile>
          </FlexBox>
          <Media.PC>
            <Spacing size={14} />
            <FlexBox>
              <StyledLink to="/">자세히 보러가기</StyledLink>
            </FlexBox>
          </Media.PC>
        </Media.Padding>
      </Wrapper>
      <BottomDevider />
    </>
  );
};

export default MyHistory;

const Wrapper = styled.div`
  ${media.mobile} {
    padding: 12px 30px;
  }
  ${media.pc} {
    border-top: 1px solid ${({ theme }) => theme.palette.black};
    border-bottom: 1px solid ${({ theme }) => theme.palette.black};
  }
`;

const Devider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.grey4};
`;

const UpdateNotice = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 3; // 원하는 라인수
  -webkit-box-orient: vertical;
`;
const StyledLink = styled(Link)`
  ${({ theme }) => theme.typo["label.1"]}
  color : ${({ theme }) => theme.palette.grey4};
  text-decoration: underline;
  cursor: pointer;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${({ theme }) => theme.palette.grey4};
    text-decoration: underline;
  }
`;

const BottomDevider = styled.div`
  &:last-of-type {
    display: none;
  }

  ${media.mobile} {
    height: 1px;
    margin: 0 16px;
    background-color: ${({ theme }) => theme.palette.grey2};
  }

  ${media.pc} {
    height: 21px;
  }
`;
