import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { FlexBox } from "../atoms/FlexBox";
import { NavLink, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { ReactComponent as SearchIcon } from "~/assets/icon/search-big.svg";
import { Modal } from "../modal";
import Button from "../atoms/Button";
import { theme } from "~/styles/theme";

const MobileNavBar = () => {
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSearch = (flag: boolean) => {
    setHamburgerToggle(flag);
    setIsMobileSearchOpen(flag);
    setIsMobileMenuOpen(false);
  };
  const toggleNavMenu = (flag: boolean) => {
    setHamburgerToggle(flag);
    setIsMobileMenuOpen(flag);
    setIsMobileSearchOpen(false);
  };

  return (
    <>
      <Wrapper>
        <NavBarMobileContainer justify={"space-between"} gap={3}>
          {isMobileSearchOpen ? (
            <MobileSearchInput placeholder="검색어를 입력하세요" autoFocus />
          ) : (
            <FlexBox justify={"space-between"} fullWidth>
              <div
                onClick={() => {
                  navigate("/");
                  toggleNavMenu(false);
                  toggleSearch(false);
                }}
              >
                로고
              </div>
              {!isMobileMenuOpen && (
                <SearchIcon
                  onClick={() => {
                    toggleSearch(true);
                  }}
                />
              )}
            </FlexBox>
          )}
          <HamburgerButton ref={buttonRef}>
            <Hamburger
              size={18}
              distance="md"
              toggled={hamburgerToggle}
              toggle={() => {
                if (hamburgerToggle) {
                  toggleSearch(false);
                  toggleNavMenu(false);
                } else {
                  toggleNavMenu(true);
                }
              }}
              rounded
              color="#525354"
            />
          </HamburgerButton>
        </NavBarMobileContainer>
      </Wrapper>
      <Modal
        position="top"
        open={isMobileMenuOpen}
        onClose={() => toggleNavMenu(false)}
      >
        <NavContainer gap={16} direction={"column"} align={"flex-start"}>
          <StyledNavLink
            to="/explore"
            onClick={() => toggleNavMenu(false)}
            style={({ isActive }) =>
              isActive ? { color: theme.palette.red } : {}
            }
          >
            진행 중 공구
          </StyledNavLink>
          <StyledNavLink
            to="/demand"
            onClick={() => toggleNavMenu(false)}
            style={({ isActive }) =>
              isActive ? { color: theme.palette.red } : {}
            }
          >
            수요조사
          </StyledNavLink>
          <StyledNavLink
            to="/series"
            onClick={() => toggleNavMenu(false)}
            style={({ isActive }) =>
              isActive ? { color: theme.palette.red } : {}
            }
          >
            공구 시리즈
          </StyledNavLink>
          <StyledNavLink
            to="/mypage"
            onClick={() => toggleNavMenu(false)}
            style={({ isActive }) =>
              isActive ? { color: theme.palette.red } : {}
            }
          >
            마이페이지
          </StyledNavLink>
        </NavContainer>
        <Line />
        <Button
          size="sm"
          color="red"
          onClick={() => {
            toggleNavMenu(false);
            navigate("/admin/info");
          }}
        >
          공구 시작하기
        </Button>
      </Modal>
    </>
  );
};

export default MobileNavBar;

const Wrapper = styled(FlexBox)`
  margin: 0 auto;
  height: 54px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  border-bottom: 1px solid ${({ theme }) => theme.palette.black};
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
`;

const NavBarMobileContainer = styled(FlexBox)`
  position: fixed;
  width: 100%;
  display: flex;
  padding: 0 4.25px 0 17px;
`;

const MobileSearchInput = styled.input`
  ${({ theme }) => theme.typo["body.1"]}
  color : ${({ theme }) => theme.palette.grey4};

  &:placeholder-shown {
    ${({ theme }) => theme.typo["body.1"]}
    color : ${({ theme }) => theme.palette.grey4};
  }
`;

const HamburgerButton = styled.div`
  & > div > div {
    height: 1.5px !important;
  }
`;

const StyledNavLink = styled(NavLink)`
  ${({ theme }) => theme.typo["heading.4"]}
  color : ${({ theme }) => theme.palette.grey6};
  .active {
    color: ${({ theme }) => theme.palette.red};
  }
`;
const NavContainer = styled(FlexBox)``;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.grey2};
  margin: 26px 0;
`;
