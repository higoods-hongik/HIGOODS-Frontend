import { FlexBox } from "~/components/atoms/layout/FlexBox";
import { ReactComponent as ShortCutIcon } from "~/assets/icon/shortcut.svg";
import MediaQuery from "~/components/atoms/layout/MediaQuery";
import { Txt } from "~/components/atoms/Txt";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export interface HomeHeadingProps {
  pcLabel?: string;
  mobileLabel?: string;
  link?: string;
}

const HomeHeading = ({ pcLabel, mobileLabel, link }: HomeHeadingProps) => {
  const navigate = useNavigate();
  return (
    <>
      <MediaQuery.Mobile>
        <MobileHeadingContainer>
          <FlexBox
            justify={"space-between"}
            align={"flex-end"}
            css={css`
              padding-right: 16px;
              padding-bottom: 12px;
            `}
          >
            <Txt typo="heading.2" color="black">
              {mobileLabel}
            </Txt>
            {link && (
              <button onClick={() => navigate(link)}>
                <ShortCutIcon />
              </button>
            )}
          </FlexBox>
        </MobileHeadingContainer>
      </MediaQuery.Mobile>
      <MediaQuery.PC>
        <PcHeadingContainer justify={"space-between"}>
          <Txt typo="heading.1" color="black">
            {pcLabel}
          </Txt>
          {link && (
            <button onClick={() => navigate(link)}>
              <ShortCutIcon />
            </button>
          )}
        </PcHeadingContainer>
      </MediaQuery.PC>
    </>
  );
};

const MobileHeadingContainer = styled.div`
  border-bottom: 1.4px solid ${({ theme }) => theme.palette.grey6};
  margin-left: 16px;
`;
const PcHeadingContainer = styled(FlexBox)``;

export default HomeHeading;
