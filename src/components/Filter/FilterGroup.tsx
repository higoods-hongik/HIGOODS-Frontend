import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";
import { FlexBox } from "../layout/FlexBox";
import { useFilterContext } from "./useFilterContext";
interface FilterGroupProps {
  children: ReactNode;
  onChange?: (value: string[]) => void;
}

const FilterGroup = ({ children, onChange }: FilterGroupProps) => {
  const { checkedValue } = useFilterContext();

  useEffect(() => {
    onChange?.(checkedValue);
  }, [checkedValue]);

  return (
    <Wrapper direction={"column"} gap={12} align={"flex-start"}>
      {children}
    </Wrapper>
  );
};

export default FilterGroup;

const Wrapper = styled(FlexBox)`
  padding: 12px 0;
`;
