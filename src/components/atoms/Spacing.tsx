import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: "horizontal" | "vertical";
  size: number;
}

const Spacing = ({ direction = "vertical", size, ...props }: SpacingProps) => {
  return <Container direction={direction} size={size} {...props} />;
};

export default Spacing;
const Container = styled.div<SpacingProps>`
  flex: "none";
  width: ${({ direction, size }) =>
    direction === "horizontal" ? `${size}px` : undefined};
  height: ${({ direction, size }) =>
    direction === "vertical" ? `${size}px` : undefined};
`;
