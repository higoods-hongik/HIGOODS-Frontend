import styled from "@emotion/styled";
import { Children, ReactNode, useState } from "react";
import { media } from "~/styles/theme";
import { ReactComponent as Chevron } from "~/assets/icon/chevron-down.svg";
import { css } from "@emotion/react";
import { FlexBox } from "~/components/layout/FlexBox";
import { RadioProvider } from "./useRadioContext";

export interface FilterProps {
  defaultCheckedValue?: string[];
  children?: ReactNode;
  value?: string[];
  onChange?: (name: string, value: string[]) => void;
  type?: "radio" | "checkbox";
}

const Box = ({
  defaultCheckedValue = [],
  children,
  value,
  onChange,
  type = "checkbox",
}: FilterProps) => {
  const optionLength = Children.count(children);
  return (
 <Container>
        <RadioProvider
          defaultChecked={defaultCheckedValue}
          name={name}
          onChange={onChange}
          type={type}
          outerValue={value}
        >
          {children}
        </RadioProvider>
      </FoldContainer>
</Container>
  );
};

export default Box;

const Container = styled.div`
  display: grid;
  grid-template-columns
`