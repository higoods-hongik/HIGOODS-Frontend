import { css } from "@emotion/react";
import { ComponentProps } from "react";

const PcContainer = ({ children, ...rest }: ComponentProps<"div">) => {
  return (
    <div
      css={css`
        width: 100%;
        max-width: 984px;
        margin: auto;
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export default PcContainer;
