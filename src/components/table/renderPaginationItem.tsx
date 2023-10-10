import { css } from "@emotion/react";
import { PaginationProps } from "antd/es/pagination";
import { ReactComponent as PrevIcon } from "~/assets/icon/chevron-left.svg";

export const renderPaginationItem: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return (
      <a css={css({ width: 16, height: 16, display: "flex" })}>
        <PrevIcon />
      </a>
    );
  }
  if (type === "next") {
    return (
      <a css={css({ width: 16, height: 16, display: "flex" })}>
        <PrevIcon css={css({ transform: "rotate(-180deg)" })} />
      </a>
    );
  }

  return originalElement;
};
