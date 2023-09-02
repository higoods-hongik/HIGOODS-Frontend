import styled from "@emotion/styled";
import { NavLink, useParams } from "react-router-dom";
import { Txt } from "../atoms/Txt";
import { css } from "@emotion/react";
import { theme } from "~/styles/theme";
import { ComponentProps } from "react";
import { Spacing } from "../layout/Spacing";

export const SubMenu = ({
  subMenu,
  className,
  to,
  ...rest
}: {
  subMenu: { label: string; to: string }[];
  to: string;
} & ComponentProps<"div">) => {
  const { sub } = useParams<{ sub: string }>();

  return (
    <div className={className} css={absoluteStyle}>
      <Spacing size={36} />
      <Container {...rest}>
        {subMenu.map((v) => (
          <NavLink to={`${to}/${v.to}`} css={linkStyle}>
            <Txt typo="label.2" as="div" css={textStyle(sub === v.to)}>
              {v.label}
            </Txt>
          </NavLink>
        ))}
      </Container>
    </div>
  );
};

const absoluteStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 8px;
`;

const Container = styled.div`
  padding: 14px 18px;
  width: 144px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.palette.black};
  background-color: ${({ theme }) => theme.palette.white};
  display: flex;
  flex-direction: column;
`;

const linkStyle = css`
  &:not(:first-of-type) {
    padding-top: 12px;
  }
  &:not(:last-of-type) {
    padding-bottom: 12px;
    border-bottom: 1px solid ${theme.palette.grey2};
  }
`;

const textStyle = (isActive: boolean) => css`
  color: ${isActive ? theme.palette.red : theme.palette.grey4};
  &:hover {
    color: ${theme.palette.red};
  }
`;
