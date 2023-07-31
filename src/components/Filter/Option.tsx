import styled from "@emotion/styled";
import { ReactComponent as CheckboxTrueIcon } from "~/assets/icon/check-true.svg";
import { ReactComponent as CheckboxFalseIcon } from "~/assets/icon/check-false.svg";
import { ComponentProps, useState } from "react";
import { useFilterContext } from "./useFilterContext";
import { FlexBox } from "../layout/FlexBox";

export interface OptionProps extends ComponentProps<"input"> {
  value: string;
}

const Option = ({ children, value }: OptionProps) => {
  const { checkedValue, setCheckedValue, name, onChange } = useFilterContext();
  const [checked, setChecked] = useState(checkedValue.includes(value));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (checkedValue.includes(value)) {
      setChecked(false);
      const newValue = checkedValue.filter((v) => v !== value);

      setCheckedValue(newValue);
      onChange?.(name, newValue);
    } else {
      setChecked(true);
      const newValue = [...checkedValue, value];

      setCheckedValue(newValue);
      onChange?.(name, newValue);
    }
  };

  return (
    <Wrapper>
      <CheckBoxInput
        type="checkbox"
        id={value}
        value={value}
        name={name}
        onChange={handleChange}
      />
      <label htmlFor={value}>
        <Container gap={8}>
          {checked ? <CheckboxTrueIcon /> : <CheckboxFalseIcon />}
          <LabelText checked={checked}>{children}</LabelText>
        </Container>
      </label>
    </Wrapper>
  );
};

export default Option;

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
