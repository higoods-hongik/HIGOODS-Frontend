import { css } from "@emotion/react";
import { CSSProperties } from "@emotion/serialize";
import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode } from "react";

export interface GridBoxProps extends HTMLAttributes<HTMLDivElement> {
  gridTemplateColumns: CSSProperties["gridTemplateColumns"];
  gap?: CSSProperties["columnGap"];
  children: ReactNode;
  fullWidth?: boolean;
}

export const GridBox = ({
  gridTemplateColumns,
  gap = 0,
  children,
  fullWidth,
  ...props
}: GridBoxProps) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: ${gridTemplateColumns};
        gap: ${gap}px;
        width: ${fullWidth ? `100%` : `auto`};
      `}
      {...props}
    >
      {children}
    </div>
  );
};

GridBox.Left = styled.div``;
GridBox.Right = styled.div``;
