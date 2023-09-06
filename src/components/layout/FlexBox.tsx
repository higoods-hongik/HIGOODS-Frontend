import { css } from "@emotion/react";
import { CSSProperties } from "@emotion/serialize";
import { ComponentPropsWithRef, ReactNode } from "react";

export interface FlexBoxProps extends ComponentPropsWithRef<"div"> {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
  children: ReactNode;
  fullWidth?: boolean;
}

export type flexboxPropsKey = "align" | "justify" | "direction" | "gap";
/**
 *
 * @param align : align-items 속성 (기본값 : center)
 * @param jusitfy : justify-content 속성 (기본값 : center)
 * @param direction : direction 속성 (기본값 : row)
 * @param gap : gap 속성
 */
export const FlexBox = ({
  align = "center",
  justify = "center",
  direction = "row",
  gap = 0,
  children,
  fullWidth,
  ref,
  ...props
}: FlexBoxProps) => {
  return (
    <div
      ref={ref}
      css={css`
        display: flex;
        align-items: ${align};
        justify-content: ${justify};
        flex-direction: ${direction};
        gap: ${gap}px;
        width: ${fullWidth ? `100%` : `auto`};
      `}
      {...props}
    >
      {children}
    </div>
  );
};
