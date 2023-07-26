import { css } from "@emotion/react";
import { ComponentProps } from "react";
import { media } from "~/styles/theme";

const MobileContainer = ({ children }: ComponentProps<"div">) => {
  return (
    <div
      css={css`
        ${media.mobile} {
          padding: 0 16px;
        }
      `}
    >
      {children}
    </div>
  );
};

export default MobileContainer;
