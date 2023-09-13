import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Txt } from "~/components/atoms/Txt";
import Media from "~/components/layout/Media";
import { Spacing } from "~/components/layout/Spacing";
import { media } from "~/styles/theme";

const FormGroup = ({
  title,
  children,
  description,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) => {
  return (
    <Wrapper>
      <Media.Padding mobile={[0, 0, 20, 0]} pc={[0, 0, 24, 0]}>
        <Media.Txt mobile="heading.4" pc="heading.3">
          {title}
        </Media.Txt>
        {description && (
          <>
            <Spacing size={12} />
            <Txt color="red" typo="label.2">
              {description}
            </Txt>
          </>
        )}
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
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey2};
  }
`;
