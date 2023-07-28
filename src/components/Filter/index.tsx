import styled from "@emotion/styled";
import { Children, ReactNode, useState } from "react";
import { media } from "~/styles/theme";
import { ReactComponent as Chevron } from "~/assets/icon/chevron-down.svg";
import Media from "../layout/Media";
import { FlexBox } from "../layout/FlexBox";
import FilterGroup from "./FilterGroup";
import { FilterProvider } from "./useFilterContext";
import { css } from "@emotion/react";

export interface FilterProps {
  title: string;
  folding?: boolean;
  defaultOpen?: boolean;
  children?: ReactNode;
  onChange?: (value: string[]) => void;
}

const Filter = ({
  title,
  folding = false,
  defaultOpen = true,
  children,
  onChange,
}: FilterProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Wrapper>
      <Header justify={"space-between"}>
        <legend>
          <Media.Txt mobile="label.2" pc="heading.4">
            {title}
          </Media.Txt>
        </legend>
        {folding && <Handler open={open} onClick={() => setOpen(!open)} />}
      </Header>
      <FoldContainer open={open} count={Children.count(children)}>
        <FilterProvider>
          <FilterGroup onChange={onChange}>{children}</FilterGroup>
        </FilterProvider>
      </FoldContainer>
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.fieldset`
  border-top: 1px solid ${({ theme }) => theme.palette.black};
  border-bottom: 1px solid ${({ theme }) => theme.palette.black};
`;
const Header = styled(FlexBox)`
  ${media.pc} {
    padding: 12px 0;
  }
  ${media.mobile} {
    padding: 8px 0;
  }
`;

const FoldContainer = styled.div<{ open: boolean; count: number }>`
  max-height: ${({ open, count }) => (open ? `${count * 100}px ` : `0px`)};
  transition: all 0.1s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  overflow: hidden;
`;

const Handler = styled(Chevron)<{ open: boolean }>`
  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
  transition: all 0.2s cubic-bezier(0.465, 0.183, 0.153, 0.946);
`;
