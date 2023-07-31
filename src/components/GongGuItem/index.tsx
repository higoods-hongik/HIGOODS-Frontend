import Media from "../layout/Media";
import { GongGuItemMobile } from "./GongGuItemMobile";
import { GongGuItemRow } from "./GongGuItemRow";
import { GongGuItemCol } from "./GongGuItemCol";
import GongGuItemWide from "./GongGuItemWide";
import { Link } from "react-router-dom";

export type GongGuItemVarients = "row" | "col" | "wide";
export interface GongGuItemProps {
  id: number;
  category?: string;
  title?: string;
  description?: string;
  process?: string;
  price?: number;
  imageUrl?: string;
}

const gongGuItemMap: Record<
  GongGuItemVarients,
  (props: GongGuItemProps) => JSX.Element
> = {
  row: (props: GongGuItemProps) => <GongGuItemRow {...props} />,
  col: (props: GongGuItemProps) => <GongGuItemCol {...props} />,
  wide: (props: GongGuItemProps) => <GongGuItemWide {...props} />,
};

const GongGuItem = ({
  varients,
  data,
}: {
  varients: GongGuItemVarients;
  data: GongGuItemProps;
}) => {
  return (
    <Link to={`/goods/${data.id}`}>
      <Media.PC>{gongGuItemMap[varients](data)}</Media.PC>
      <Media.Mobile>
        <GongGuItemMobile {...data} />
      </Media.Mobile>
    </Link>
  );
};

export default GongGuItem;
