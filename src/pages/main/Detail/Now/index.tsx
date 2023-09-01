import Media from "~/components/layout/Media";
import { Spacing } from "~/components/layout/Spacing";
import NowMobile from "./Mobile";
import NowPC from "./PC";

const Now = () => {
  //const { id } = useParams();

  return (
    <>
      <Media.Mobile>
        <NowMobile />
      </Media.Mobile>
      <Media.PC>
        <NowPC />
      </Media.PC>
      <Spacing size={100} />
    </>
  );
};

export default Now;
