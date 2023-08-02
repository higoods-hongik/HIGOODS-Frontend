import styled from "@emotion/styled";
import { media } from "~/styles/theme";
import Input from "./Input";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface InputRowProps {
  name: string;
  label: string;
  placeholder?: string;
}

const InputRow = ({ label, name, placeholder }: InputRowProps) => {
  const [focused, setFocused] = useState(false);
  const { register, watch } = useFormContext();
  const value = watch(name);

  return (
    <FormGrid>
      <Label isInit={value?.length === 0} focused={focused}>
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

const FormGrid = styled.div`
  width: 100%;
  display: grid;
  ${media.pc} {
    grid-template-columns: 1fr 7fr;
    grid-gap: 24px;
  }
  ${media.mobile} {
    grid-template-columns: 1fr;
    grid-gap: 8px;
  }
`;

const Label = styled.label<{ isInit: boolean; focused: boolean }>`
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
        : theme.palette.grey6}
  }
  transition: all 0.2s ease;
`;
