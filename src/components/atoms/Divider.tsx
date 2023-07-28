/** @jsxImportSource @emotion/react */
import { HTMLAttributes } from "react";
import { palette } from "~/styles/palette";
import { Padding, PaddingSize } from "../layout/Padding";
import { theme } from "~/styles/theme";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  padding?: PaddingSize;
  color: keyof typeof palette;
}

export const Divider = ({ padding, color, ...props }: DividerProps) => {
  return (
    <Padding size={padding} {...props}>
      <div
        css={{
          width: "100%",
          height: "1px",
          backgroundColor: `${theme.palette[color]}`,
        }}
      />
    </Padding>
  );
};
