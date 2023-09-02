import { ReactComponent as ChevronDown } from "~/assets/icon/chevron-admin.svg";
import { Txt } from "../atoms/Txt";
import { FlexBox } from "../layout/FlexBox";
import { css } from "@emotion/react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "~/styles/theme";
import { SubMenu } from "./SubMenu";

export const AdminMenuItem = ({
  label,
  to,
  subMenu,
}: {
  label: string;
  to: string;
  subMenu?: { label: string; to: string }[];
}) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const isActive = to ? pathname.includes(to) : false;

  return (
    <NavLink
      to={subMenu ? `${to}/${subMenu[0].to}` : to}
      style={({ isActive }) => (isActive ? { color: theme.palette.black } : {})}
    >
      <Container direction={"column"} justify={"space-between"}>
        <FlexBox gap={8}>
          <Txt typo="heading.4" color={isActive ? "black" : "grey4"}>
            {label}
          </Txt>
          {subMenu && (
            <>
              <ChevronDown
                css={css({
                  color: isActive ? theme.palette.black : theme.palette.grey4,
                })}
              />
              <SubMenu subMenu={subMenu} to={to} className="subMenu" />
            </>
          )}
        </FlexBox>
        {isActive && <Line />}
      </Container>
    </NavLink>
  );
};

const Container = styled(FlexBox)`
  height: 36px;
  color: ${({ theme }) => theme.palette.grey4};
  position: relative;

  &:not(:hover) {
    .subMenu {
      display: none;
    }
  }
`;

const Line = styled.div`
  height: 2px;

  transform: translateY(1px);
  background-color: ${({ theme }) => theme.palette.red};

  @keyframes grow {
    from {
      width: 50%;
    }
    to {
      width: 100%;
    }
  }
  animation: 0.2s forwards grow cubic-bezier(0.075, 0.82, 0.165, 1);
`;
