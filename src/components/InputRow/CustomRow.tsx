import styled from "@emotion/styled";
import { media } from "~/styles/theme";

import { ReactNode } from "react";
import { FlexBox } from "../layout/FlexBox";
import { useMediaQuery } from "react-responsive";

interface InputRowProps {
  name: string;
  label: string;
  placeholder?: string;
  children: ReactNode;
  focused: boolean;
  isInit: boolean;
}

const CustomRow = ({ label, children, focused, isInit }: InputRowProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <FormGrid>
      <Label isInit={isInit} focused={focused}>
        {label}
      </Label>
      <FlexBox gap={isMobile ? 14 : 24} fullWidth>
        {children}
      </FlexBox>
    </FormGrid>
  );
};

export default CustomRow;

const FormGrid = styled.div`
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
