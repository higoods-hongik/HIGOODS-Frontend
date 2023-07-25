import styled from "@emotion/styled";
import { ComponentProps } from "react";

interface SearchInputProps extends ComponentProps<"input"> {
  fullWidth?: boolean;
}

const SearchInput = ({ fullWidth }: SearchInputProps) => {
  return <Container fullWidth={fullWidth}></Container>;
};

export default SearchInput;

const Container = styled.input<Partial<SearchInputProps>>`
  height: 34px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "312px")};
  border: 1px solid ${({ theme }) => theme.palette.grey4};
  box-sizing: border-box;
`;
