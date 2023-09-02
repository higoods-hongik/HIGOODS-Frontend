import styled from "@emotion/styled";
import { Children, ReactNode, useState } from "react";
import { media } from "~/styles/theme";
import { ReactComponent as Chevron } from "~/assets/icon/chevron-down.svg";
import Media from "../layout/Media";
import { FlexBox } from "../layout/FlexBox";
import { FilterProvider } from "./useFilterContext";
import { css } from "@emotion/react";
import { useMediaQuery } from "react-responsive";

export interface FilterProps {
  title: string;
  name: string;
  folding?: boolean;
  defaultOpen?: boolean;
  defaultCheckedValue?: string[];
  children?: ReactNode;
  value?: string[];
  onChange?: (name: string, value: string[]) => void;
  type?: "radio" | "checkbox";
}

const Box = ({
  title,
  name,
  folding = false,
  defaultOpen = true,
  defaultCheckedValue = [],
  children,
  value,
  onChange,
  type = "checkbox",
}: FilterProps) => {
  const [open, setOpen] = useState(defaultOpen);

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <Wrapper>
      <Header
        justify={"space-between"}
        onClick={() => isMobile && setOpen(!open)}
      >
        <legend>
          <Media.Txt mobile="label.2" pc="heading.4">
            {title}
          </Media.Txt>
        </legend>
        {(isMobile || folding) && (
          <Handler open={open} onClick={() => setOpen(!open)} />
        )}
      </Header>
      <FoldContainer
        open={open}
        count={Children.count(children)}
        folding={folding}
      >
        <FilterProvider
          defaultChecked={defaultCheckedValue}
          name={name}
          onChange={onChange}
          type={type}
          outerValue={value}
        >
          <FilterGroup direction={"column"} gap={12} align={"flex-start"}>
            {children}
          </FilterGroup>
        </FilterProvider>
      </FoldContainer>
    </Wrapper>
  );
};

export default Box;

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

const FoldContainer = styled.div<{
  open: boolean;
  count: number;
  folding: boolean;
}>`
  ${media.mobile} {
    max-height: ${({ open, count }) => (open ? `${count * 100}px ` : `0px`)};
  }
  ${media.pc} {
    max-height: ${({ open, count, folding }) =>
      folding ? (open ? `${count * 100}px ` : `0px`) : "100%"};
  }
  transition: all 0.2s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  overflow: hidden;
`;

const Handler = styled(Chevron)<{ open: boolean }>`
  color: ${({ theme }) => theme.palette.grey4};
  cursor: pointer;
  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
  transition: all 0.2s cubic-bezier(0.465, 0.183, 0.153, 0.946);
`;

const FilterGroup = styled(FlexBox)`
  padding: 12px 0;
`;
