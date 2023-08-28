import styled from "@emotion/styled";
import { media } from "~/styles/theme";
import Input from "./Input";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { css } from "@emotion/react";

interface InputRowProps {
  name: string;
  label: string;
  placeholder?: string;
  variant?: "mobile" | "pc";
}

const InputRow = ({ label, name, placeholder, variant }: InputRowProps) => {
  const [focused, setFocused] = useState(false);
  const { register, watch } = useFormContext();
  const value = watch(name);

  return (
    <FormGrid variant={variant}>
      <Label isInit={value?.length === 0} focused={focused} variant={variant}>
        {label}
      </Label>
      <Input
        value={value}
        placeholder={placeholder || "내용을 입력하세요"}
        {...register(name)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </FormGrid>
  );
};

export default InputRow;

const FormGrid = styled.div<{ variant?: "mobile" | "pc" }>`
  width: 100%;
  display: grid;
  ${media.pc} {
    grid-template-columns: auto 564px;
    grid-gap: 24px;
  }
  ${media.mobile} {
    grid-template-columns: 1fr;
    grid-gap: 8px;
  }

  ${({ variant }) =>
    variant
      ? variant === "pc"
        ? css`
            grid-template-columns: auto 564px;
            grid-gap: 24px;
          `
        : css`
            grid-template-columns: 1fr;
            grid-gap: 8px;
          `
      : css``}
`;

const Label = styled.label<{
  isInit: boolean;
  focused: boolean;
  variant?: "mobile" | "pc";
}>`
  margin: auto 0;

  ${media.pc} {
    ${({ theme }) => theme.typo["heading.4"]}
    color: ${({ theme }) => theme.palette.black};
  }
  ${media.mobile} {
    ${({ theme }) => theme.typo["label.2"]}
    color : ${({ theme, isInit, focused }) =>
      focused
        ? theme.palette.grey6
        : isInit
        ? theme.palette.grey4
        : theme.palette.grey6};
  }
  transition: all 0.2s ease;

  ${({ variant, theme, isInit, focused }) =>
    variant
      ? variant === "pc"
        ? css`
            ${theme.typo["heading.4"]}
            color : ${theme.palette.black};
          `
        : css`
            ${theme.typo["label.2"]}
            color : ${focused
              ? theme.palette.grey6
              : isInit
              ? theme.palette.grey4
              : theme.palette.grey6};
          `
      : css``}
`;
