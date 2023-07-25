import styled from "@emotion/styled";
import { ComponentProps } from "react";
import { keyOfPalette, keyOfTypo } from "~/styles/theme";

type ButtonSizeType = "lg" | "md" | "sm";
type ButtonColorType =
  | "red"
  | "red20"
  | "black"
  | "lineBlack"
  | "line"
  | "lineGray";

type SizeMapType = {
  height: number;
  padding: [number, number];
  typo: keyOfTypo;
};

const TEXT_COLOR: Record<ButtonColorType, keyOfPalette> = {
  red: "white",
  red20: "red",
  black: "white",
  lineBlack: "black",
  line: "red",
  lineGray: "black",
};

const BACKGROUND_COLOR: Record<ButtonColorType, keyOfPalette> = {
  red: "red",
  red20: "red20",
  black: "black",
  lineBlack: "black",
  line: "red",
  lineGray: "grey2",
};

const SIZE_MAP: Record<ButtonSizeType, SizeMapType> = {
  lg: { height: 45, typo: "heading.3", padding: [10, 32] },
  md: { height: 42, typo: "heading.4", padding: [10, 28] },
  sm: { height: 32, typo: "label.2", padding: [6, 16] },
};

export interface ButtonProps extends ComponentProps<"button"> {
  size: ButtonSizeType;
  color: ButtonColorType;
  fullWidth?: boolean;
  width?: number;
}

type Props = Pick<ButtonProps, "size" | "color" | "fullWidth" | "width">;

const Button = ({
  size,
  color,
  fullWidth = false,
  width,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      {...rest}
      size={size}
      color={color}
      fullWidth={fullWidth}
      width={width}
    >
      {children}
    </Container>
  );
};

export default Button;

const isLine = (string: string) => string.includes("line");

const Container = styled.button<Props>`
  color: ${({ theme, color }) => theme.palette[TEXT_COLOR[color]]};
  background-color: ${({ theme, color }) =>
    isLine(color) ? "transparent" : theme.palette[BACKGROUND_COLOR[color]]};
  border-color: ${({ theme, color }) =>
    isLine(color) ? theme.palette[BACKGROUND_COLOR[color]] : "transparent"};
  width: ${({ fullWidth, width }) =>
    fullWidth ? "100%" : width ? `${width}px` : "auto"};

  height: ${({ size }) => SIZE_MAP[size].height}px;
  padding: ${({ size }) =>
    `${SIZE_MAP[size].padding[0]}px ${SIZE_MAP[size].padding[1]}px`};
  ${({ theme, size }) => theme.typo[SIZE_MAP[size].typo]}
`;
