import styled from "@emotion/styled";
import { media, theme } from "~/styles/theme";
import Input from "./Input";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { css } from "@emotion/react";
import { match } from "ts-pattern";

interface FormInputRowProps {
  name: string;
  label: string;
  placeholder?: string;
  variant?: "mobile" | "pc";
}

const FormInputRow = ({
  label,
  name,
  placeholder,
  variant,
}: FormInputRowProps) => {
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

export default FormInputRow;

const formGridPcStyle = css`
  grid-template-columns: auto 564px;
  grid-gap: 24px;
`;
const formGridMobileStyle = css`
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

const FormGrid = styled.div<{ variant?: "mobile" | "pc" }>`
  width: 100%;
  display: grid;

  ${({ variant }) =>
    match(variant)
      .with("pc", () => formGridPcStyle)
      .with("mobile", () => formGridMobileStyle)
      .otherwise(
        () => css`
          ${media.pc} {
            ${formGridPcStyle}
          }
          ${media.mobile} {
            ${formGridMobileStyle}
          }
        `
      )}
`;

const labelMobileStyle = (isInit: boolean, focused: boolean) => css`
  color: ${focused
    ? theme.palette.grey6
    : isInit
    ? theme.palette.grey4
    : theme.palette.grey6};
`;
const labelPcStyle = css`
  ${theme.typo["heading.4"]}
  color : ${theme.palette.black};
`;

const Label = styled.label<{
  isInit: boolean;
  focused: boolean;
  variant?: "mobile" | "pc";
}>`
  margin: auto 0;
  transition: all 0.2s ease;
  ${({ variant, isInit, focused }) =>
    match(variant)
      .with("pc", () => labelPcStyle)
      .with("mobile", () => labelMobileStyle(isInit, focused))
      .otherwise(
        () => css`
          ${media.pc} {
            ${labelPcStyle}
          }
          ${media.mobile} {
            ${labelMobileStyle(isInit, focused)}
          }
        `
      )}
`;
