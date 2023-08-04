import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  value?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, fullWidth = false, ...rest }: InputProps, ref) => {
    return (
      <Wrapper
        fullWidth={fullWidth}
        type="text"
        value={value}
        isEmpty={!value || value.length === 0}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Input;

const Wrapper = styled.input<{ isEmpty: boolean; fullWidth: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  height: 42px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.palette.grey6};
  padding: 0 14px;
  ${({ theme }) => theme.typo["body.1"]}
  color : ${({ theme }) => theme.palette.grey6};

  &:placeholder-shown {
    ${({ theme }) => theme.typo["body.1"]}
  }
  ${({ theme, isEmpty }) =>
    isEmpty &&
    css`
      color: ${theme.palette.grey4};
      border: 1px solid ${theme.palette.grey2};
    `}

  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.red};
  }
  transition: all 0.2s ease;
`;
