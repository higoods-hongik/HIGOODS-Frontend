import styled from "@emotion/styled";
import { ComponentProps } from "react";
import { ReactComponent as SearchIcon } from "~/assets/icon/search.svg";
import { FlexBox } from "./layout/FlexBox";

interface SearchInputProps extends ComponentProps<"input"> {
  fullWidth?: boolean;
}

const SearchInput = ({ fullWidth, ...rest }: SearchInputProps) => {
  return (
    <Container
      fullWidth={fullWidth}
      gap={8}
      justify={"space-between"}
      {...rest}
    >
      <SearchIcon />
      <InputBox placeholder="검색어를 입력하세요." />
    </Container>
  );
};

export default SearchInput;

const Container = styled(FlexBox)<{ fullWidth?: boolean }>`
  height: 34px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "312px")};
  border: 1px solid ${({ theme }) => theme.palette.grey4};
  box-sizing: border-box;
  padding: 0 12px;
`;

const InputBox = styled.input<Partial<SearchInputProps>>`
  color: ${({ theme }) => theme.palette.grey4};
  ${({ theme }) => theme.typo["body.2"]}
  &:placeholder-shown {
    color: ${({ theme }) => theme.palette.grey4};
    ${({ theme }) => theme.typo["body.2"]}
  }
  width: 100%;
`;
