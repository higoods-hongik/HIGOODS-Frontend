import { css } from "@emotion/react";
import Button from "../atoms/Button";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuBar } from "../MenuBar";
import { FlexBox } from "../atoms/FlexBox";
import SearchInput from "../atoms/SearchInput";
import { NavMap } from ".";
import { ReactComponent as ProfileIcon } from "~/assets/icon/profile.svg";
import styled from "@emotion/styled";

const PcNavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuIndex, setMenuIndex] = useState<number>(
    NavMap.findIndex((v) => v === pathname)
  );
  useEffect(() => {
    navigate(NavMap[menuIndex]);
  }, [menuIndex]);

  return (
    <Wrapper>
      <NavBarPcContainer justify={"space-between"} gap={20}>
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
              height: 100%;
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
    </Wrapper>
  );
};

export default PcNavBar;

const Wrapper = styled(FlexBox)`
  margin: 0 auto;
  height: 54px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.black};
  box-sizing: border-box;
  position: fixed;
`;

const NavBarPcContainer = styled(FlexBox)`
  height: 100%;
  width: 100%;
  max-width: 984px;
  margin: 0 20px;
  background-color: ${({ theme }) => theme.palette.white};
`;
const LeftContainer = styled(FlexBox)`
  height: 100%;
`;
