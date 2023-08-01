/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, ReactNode } from "react";

export interface PaddingProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: PaddingSize;
  fullWidth?: boolean;
}

export type PaddingSize =
  | number
  | [number, number]
  | [number, number, number, number];

/**
 *
 * @param size
 * number : 상하좌우 패딩
 * [number,number] : 상하, 좌우
 * [number,number,number,number] : 상, 우, 하, 좌
 * @param fullWidth true: width100%
 */
export const Padding = ({
  children,
  size = [0, 0],
  fullWidth = false,
  ...props
}: PaddingProps) => {
  return (
    <div
      css={css`
        padding: ${typeof size === "number"
          ? `${size}px`
          : size.length === 2
          ? `${size[0]}px ${size[1]}px`
          : `${size[0]}px ${size[1]}px ${size[2]}px ${size[3]}px`};
        ${fullWidth && "width : 100%;"}
        box-sizing:border-box;
      `}
      {...props}
    >
      {children}
    </div>
  );
};
