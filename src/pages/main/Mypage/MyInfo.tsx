import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Media from "~/components/layout/Media";
import MobileContainer from "~/components/layout/MobileContainer";
import PcContainer from "~/components/layout/PcContainer";

const MyInfo = () => {
  return (
    <>
      <MobileContainer>
        <PcContainer>
          <Media.Spacing mobile={36} pc={80} />
          <Media.Txt
            mobile="heading.3"
            pc="heading.1"
            css={css({ textAlign: "center", width: " 100%" })}
            as="div"
          >
            내 정보 관리
          </Media.Txt>
          <Media.Spacing mobile={24} pc={48} />
          <ProfileImage />
        </PcContainer>
      </MobileContainer>
    </>
  );
};
export default MyInfo;

const ProfileImage = styled.div`
  width: 144px;
  height: 144px;
  background-color: ${({ theme }) => theme.palette.grey2};
  border-radius: 50%;
  margin: 0 auto;
`;
