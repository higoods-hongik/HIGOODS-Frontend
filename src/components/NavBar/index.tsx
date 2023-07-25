import styled from "@emotion/styled";
import MediaQuery from "../atoms/MediaQuery";
import { MenuBar } from "../MenuBar";
import { useEffect, useState } from "react";
import { FlexBox } from "../atoms/FlexBox";
import { css } from "@emotion/react";
import SearchInput from "../atoms/SearchInput";
import Button from "../atoms/Button";
import { ReactComponent as ProfileIcon } from "~/assets/icon/profile.svg";
import { useLocation, useNavigate } from "react-router-dom";

const NavMap = ["/explore", "/demand", "/series"];

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuIndex, setMenuIndex] = useState<number>(
    NavMap.findIndex((v) => v === pathname)
  );

  useEffect(() => {
    console.log(menuIndex);
    navigate(NavMap[menuIndex]);
  }, [menuIndex]);

  return (
    <NavBarWrapper>
      <MediaQuery.PC>
        <NavBarPcContainer justify={"space-between"}>
          <LeftContainer gap={24}>
            <div
              onClick={() => {
                setMenuIndex(-1);
                navigate("/");
              }}
            >
              로고
            </div>
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
          <FlexBox gap={14}>
            <SearchInput />
            <Button size="sm" color="red">
              공구 시작하기
            </Button>
            <ProfileIcon />
          </FlexBox>
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
