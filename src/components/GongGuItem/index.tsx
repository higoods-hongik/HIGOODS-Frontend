import { ComponentProps } from "react";
import Media from "../layout/Media";
import { GongGuItemMobile } from "./GongGuItemMobile";
import { GongGuItemRow } from "./GongGuItemRow";

export type GongGuItemVarients = "row" | "col" | "wide";
export interface GongGuItemProps extends ComponentProps<"div"> {
  id?: string;
  category?: string;
  title?: string;
  description?: string;
  process?: string;
  price?: number;
}

const gongGuItemMap: Record<
  GongGuItemVarients,
  (props: GongGuItemProps) => JSX.Element
> = {
  row: (props: GongGuItemProps) => <GongGuItemRow {...props} />,
  col: () => <></>,
  wide: () => <></>,
};

const GongGuItem = ({
  varients,
  data,
}: {
  varients: GongGuItemVarients;
  data: GongGuItemProps;
}) => {
  return (
    <>
      <Media.PC>{gongGuItemMap[varients](data)}</Media.PC>
      <Media.Mobile>
        <GongGuItemMobile {...data} />
      </Media.Mobile>
    </>
  );
};

export default GongGuItem;
