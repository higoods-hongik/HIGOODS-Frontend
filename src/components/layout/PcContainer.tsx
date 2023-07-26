import { css } from "@emotion/react";
import { ComponentProps } from "react";

const PcContainer = ({ children }: ComponentProps<"div">) => {
  return (
    <div
      css={css`
        width: 100%;
        max-width: 984px;
        margin: auto;
      `}
    >
      {children}
    </div>
  );
};

export default PcContainer;
