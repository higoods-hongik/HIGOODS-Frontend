import styled from "@emotion/styled";
import { ReactComponent as CheckboxTrueIcon } from "~/assets/icon/check-true.svg";
import { ReactComponent as CheckboxFalseIcon } from "~/assets/icon/check-false.svg";
import { ComponentProps } from "react";
import React from "react";
import { FlexBox } from "~/components/layout/FlexBox";
import { useRadioContext } from "./useRadioContext";

export interface OptionProps extends ComponentProps<"input"> {
  value: string;
}

const Option = ({ children, value }: OptionProps) => {
  const { checkedValue, setCheckedValue, name, onChange, type } =
    useRadioContext();

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (checkedValue.includes(value)) {
      const newValue = checkedValue.filter((v) => v !== value);

      setCheckedValue(newValue);
      onChange?.(name, newValue);
    } else {
      const newValue = [...checkedValue, value];

      setCheckedValue(newValue);
      onChange?.(name, newValue);
    }
  };

  const handleClickRadio = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (checkedValue.includes(value)) {
      setCheckedValue([]);
      onChange?.(name, []);
    } else {
      setCheckedValue([value]);
      onChange?.(name, [value]);
    }
  };

  return (
    <Wrapper>
      <CheckBoxInput
        type={type}
        id={value}
        value={value}
        name={name}
        onChange={type === "checkbox" ? handleChangeCheckbox : undefined}
        onClick={type === "radio" ? handleClickRadio : undefined}
      />
      <label htmlFor={value}>
        <Container gap={8}>
          {checkedValue.includes(value) ? (
            <CheckboxTrueIcon />
          ) : (
            <CheckboxFalseIcon />
          )}
          <LabelText checked={checkedValue.includes(value)}>
            {children}
          </LabelText>
        </Container>
      </label>
    </Wrapper>
  );
};

export default React.memo(Option);

const Wrapper = styled(FlexBox)``;

const CheckBoxInput = styled.input`
  appearance: none;
`;
const Container = styled(FlexBox)``;

const LabelText = styled.div<{ checked: boolean }>`
  ${({ theme }) => theme.typo["body.2"]}
  color: ${({ theme, checked }) =>
    checked ? theme.palette.red : theme.palette.black};
`;
