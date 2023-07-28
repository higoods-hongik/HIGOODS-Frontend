import styled from "@emotion/styled";
import { ReactComponent as CheckboxTrueIcon } from "~/assets/icon/check-true.svg";
import { ReactComponent as CheckboxFalseIcon } from "~/assets/icon/check-false.svg";
import { ComponentProps, useState } from "react";
import { useFilterContext } from "./useFilterContext";
import { FlexBox } from "../layout/FlexBox";

export interface CheckBoxProps extends ComponentProps<"input"> {
  value: string;
}

const CheckBox = ({ children, value }: CheckBoxProps) => {
  const { checkedValue, setCheckedValue } = useFilterContext();
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.target.value;
    if (checkedValue.includes(changedValue)) {
      setChecked(false);
      setCheckedValue(checkedValue.filter((v) => v !== changedValue));
    } else {
      setChecked(true);
      setCheckedValue([...checkedValue, changedValue]);
    }
  };

  return (
    <Wrapper>
      <CheckBoxInput
        type="checkbox"
        id={value}
        value={value}
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

export default CheckBox;

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
