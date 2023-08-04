import { ReactComponent as CheckboxTrueIcon } from "~/assets/icon/check-true.svg";
import { ReactComponent as CheckboxFalseIcon } from "~/assets/icon/check-false.svg";
import { ComponentProps, forwardRef } from "react";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import { FlexBox } from "~/components/layout/FlexBox";

interface FormSwitchProps extends ComponentProps<"input"> {
  label: string;
  name: string;
  value: string;
}

const FormSwitch = forwardRef<HTMLInputElement, FormSwitchProps>(
  ({ label, name, value, checked, ...rest }: FormSwitchProps, ref) => {
    const { watch } = useFormContext();
    return (
      <>
        <Wrapper justify={"flex-start"}>
          <CheckBoxInput
            type="radio"
            id={value}
            value={value}
            name={name}
            ref={ref}
            checked={checked}
            {...rest}
          />
          <label htmlFor={value}>
            <Container>
              {watch(name) === value || checked ? (
                <CheckboxTrueIcon />
              ) : (
                <CheckboxFalseIcon />
              )}
              <LabelText>{label}</LabelText>
            </Container>
          </label>
        </Wrapper>
      </>
    );
  }
);
export default FormSwitch;
const Wrapper = styled(FlexBox)`
  height: 26px;
`;

const CheckBoxInput = styled.input`
  appearance: none;
`;
const Container = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 60px auto;
  & > svg {
    margin-left: auto;
  }
`;

const LabelText = styled.div`
  ${({ theme }) => theme.typo["body.2"]}
  color: ${({ theme }) => theme.palette.black};
`;
