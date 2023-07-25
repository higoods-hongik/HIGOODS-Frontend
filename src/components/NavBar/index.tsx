import styled from "@emotion/styled";
import MediaQuery from "../atoms/MediaQuery";
import { MenuBar } from "../MenuBar";
import { useState } from "react";
import { FlexBox } from "../atoms/FlexBox";
import { css } from "@emotion/react";

const NavBar = () => {
  const [menuIndex, setMenuIndex] = useState<number>(0);

  return (
    <NavBarWrapper>
      <MediaQuery.PC>
        <NavBarPcContainer justify={"space-between"}>
          <LeftContainer gap={24}>
            <div>로고</div>
            <MenuBar
              menus={["진행중 공구", "수요조사", "공구 시리즈"]}
              curActiveMenu={menuIndex}
              setCurActiveMenu={setMenuIndex}
              css={css`
                display: flex;
                align-items: flex-end;
              `}
            />
          </LeftContainer>
          <div>asdf</div>
        </NavBarPcContainer>
      </MediaQuery.PC>
      <MediaQuery.Mobile>
        <NavBarMobileContainer></NavBarMobileContainer>
      </MediaQuery.Mobile>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled(FlexBox)`
  height: 56px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.black};
  box-sizing: border-box;
`;
const NavBarPcContainer = styled(FlexBox)`
  height: 100%;
  width: 100%;
  max-width: 984px;
`;
const LeftContainer = styled(FlexBox)`
  height: 100%;
`;
const NavBarMobileContainer = styled.div``;
