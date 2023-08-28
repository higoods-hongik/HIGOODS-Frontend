import { css } from "@emotion/react";
import Button from "../atoms/Button";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "~/assets/logo.svg";
import { MenuBar } from "../MenuBar";
import { FlexBox } from "../layout/FlexBox";
import SearchInput from "../atoms/SearchInput";

import { ReactComponent as ProfileIcon } from "~/assets/icon/profile.svg";
import styled from "@emotion/styled";

export const navMap = ["/explore", "/demand", "/series"];

const PcNavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuIndex, setMenuIndex] = useState<number>(
    navMap.findIndex((v) => v === pathname)
  );
  useEffect(() => {
    0 <= menuIndex && menuIndex < navMap.length && navigate(navMap[menuIndex]);
  }, [menuIndex]);

  return (
    <Wrapper>
      <NavBarPcContainer justify={"space-between"} gap={20}>
        <LeftContainer gap={44}>
          <a
            onClick={() => {
              setMenuIndex(-1);
              navigate("/");
            }}
          >
            <Logo />
          </a>
          <MenuBar
            menus={["진행중 공구", "수요조사"]}
            curActiveMenu={menuIndex}
            setCurActiveMenu={setMenuIndex}
            css={css`
              display: flex;
              align-items: flex-end;
              height: 100%;
            `}
          />
        </LeftContainer>
        <FlexBox gap={14}>
          <SearchInput />
          <Button
            size="sm"
            color="red"
            onClick={() => {
              setMenuIndex(-1);
              navigate("/admin/info");
            }}
          >
            공구 시작하기
          </Button>
          <ProfileIcon
            onClick={() => {
              navigate("/mypage");
              setMenuIndex(-1);
            }}
          />
        </FlexBox>
      </NavBarPcContainer>
    </Wrapper>
  );
};

export default PcNavBar;

const Wrapper = styled(FlexBox)`
  margin: 0 auto;
  height: 54px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.black};
  background-color: ${({ theme }) => theme.palette.white};
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
`;

const NavBarPcContainer = styled(FlexBox)`
  height: 100%;
  width: 100%;
  max-width: 984px;
  margin: 0 16px;
`;
const LeftContainer = styled(FlexBox)`
  height: 100%;
`;
