import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode } from "react";
import { typo } from "~/styles/typo";
import { palette } from "~/styles/palette";
import { theme } from "~/styles/theme";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  typo: keyof typeof typo;
  color?: keyof typeof palette;
  children?: ReactNode;
  required?: boolean;
}

export type TextPropsKey = "typo" | "color";
/**
 *
 * @param as Text 컴포넌트의 태그 (기본값 span)
 * @param typo Typo theme 선택
 * @param color Palette theme 선택
 */
export const Txt = ({
  typo,
  as = "span",
  color = "black",
  children,
  required = false,
  ...props
}: TextProps) => {
  return (
    <StyledText typoKey={typo} colorKey={color} as={as} {...props}>
      {children}
      {required && <span css={css({ color: theme.palette.red })}> *</span>}
    </StyledText>
  );
};

const StyledText = styled.span<{
  typoKey: keyof typeof typo;
  colorKey?: keyof typeof palette;
}>`
  white-space: pre-wrap;
  ${({ typoKey, theme }) => theme.typo[typoKey]}
  ${({ colorKey, theme }) =>
    colorKey &&
    css`
      color: ${theme.palette[colorKey]};
    `}
`;
