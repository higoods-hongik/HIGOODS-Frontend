import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps, ReactElement, forwardRef } from "react";
import { FlexBox } from "../layout/FlexBox";

interface UnderLineInputProps extends Omit<ComponentProps<"input">, "size"> {
  size: "lg" | "sm";
  rightAddon?: ReactElement;
  placeholderWidth?: number;
}

export const UnderLineInput = forwardRef<HTMLInputElement, UnderLineInputProps>(
  ({ size, rightAddon, placeholderWidth = 138, ...rest }, ref) => {
    return (
      <Container size={size} justify={"space-between"} align={"center"}>
        <Input
          css={placeHolderWithSvgStyle(size, placeholderWidth)}
          {...rest}
          ref={ref}
        />
        {rightAddon}
      </Container>
    );
  }
);

const Container = styled(FlexBox)<{ size: "lg" | "sm" }>`
  padding-bottom: ${({ size }) => (size === "lg" ? 10 : 5)}px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey4};
  ${({ theme, size }) =>
    size === "lg" ? theme.typo["heading.3"] : theme.typo["body.1"]};
`;
const Input = styled.input`
  color: ${({ theme }) => theme.palette.grey4};
  width: 100%;
`;
const placeHolderWithSvgStyle = (
  size: "lg" | "sm",
  placeholderWidth?: number
) =>
  css`
    &:placeholder-shown {
      background-image: url(${size === "lg" ? pencilBig : pencilSmall});
      background-repeat: no-repeat;
      background-position: 1px center;
      background-position-x: ${placeholderWidth ?? 0}px;
    }
  `;

const pencilBig = `"data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 20.5003L18.5 10.0003C18.7626 9.73766 18.971 9.42585 19.1131 9.08269C19.2553 8.73953 19.3284 8.37174 19.3284 8.0003C19.3284 7.62887 19.2553 7.26107 19.1131 6.91791C18.971 6.57475 18.7626 6.26295 18.5 6.0003C18.2374 5.73766 17.9256 5.52932 17.5824 5.38718C17.2392 5.24503 16.8714 5.17187 16.5 5.17188C16.1286 5.17188 15.7608 5.24503 15.4176 5.38718C15.0744 5.52932 14.7626 5.73766 14.5 6.0003L4 16.5003V20.5003H8Z' stroke='%23A1A1A1' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M13.5 7L17.5 11' stroke='%23A1A1A1' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 20.5L20 20.5' stroke='%23A1A1A1' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E%0A"`;
const pencilSmall = `"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.66732 16.6663L15.4173 7.91627C15.6362 7.6974 15.8098 7.43756 15.9283 7.15159C16.0467 6.86563 16.1077 6.55913 16.1077 6.2496C16.1077 5.94007 16.0467 5.63357 15.9283 5.34761C15.8098 5.06164 15.6362 4.8018 15.4173 4.58293C15.1984 4.36406 14.9386 4.19045 14.6526 4.072C14.3667 3.95354 14.0602 3.89258 13.7507 3.89258C13.4411 3.89258 13.1346 3.95354 12.8487 4.072C12.5627 4.19045 12.3029 4.36406 12.084 4.58293L3.33398 13.3329V16.6663H6.66732Z' stroke='%23A1A1A1' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M11.25 5.41602L14.5833 8.74935' stroke='%23A1A1A1' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 16.666L16.6667 16.666' stroke='%23A1A1A1' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E"`;
