import { css } from "@emotion/react";
import { ComponentProps } from "react";
import { media } from "~/styles/theme";

const PcContainer = ({ children, ...rest }: ComponentProps<"div">) => {
  return (
    <div
      css={css`
        ${media.pc} {
          width: 100%;
          max-width: 1016px;
          padding: 0 16px;
          margin: auto;
        }
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export default PcContainer;
