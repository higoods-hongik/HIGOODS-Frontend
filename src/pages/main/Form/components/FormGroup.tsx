import styled from "@emotion/styled";
import { ReactNode } from "react";
import Media from "~/components/layout/Media";
import { media } from "~/styles/theme";

const FormGroup = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Wrapper>
      <Media.Padding mobile={[0, 0, 20, 0]} pc={[0, 0, 28, 0]}>
        <Media.Txt mobile="heading.4" pc="heading.3">
          {title}
        </Media.Txt>
      </Media.Padding>
      <StyledInputGroup>{children}</StyledInputGroup>
    </Wrapper>
  );
};
export default FormGroup;

const StyledInputGroup = styled.div`
  & > div:not(:first-of-type) {
    ${media.pc} {
      margin-top: 24px;
    }
    ${media.mobile} {
      margin-top: 16px;
    }
  }
`;

const Wrapper = styled.div`
  padding: 36px 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey2};
`;
