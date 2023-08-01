import Media from "~/components/layout/Media";
import DetailMobile from "./Mobile";
import DetailPC from "./PC";
import { Spacing } from "~/components/layout/Spacing";

const Detail = () => {
  //const { id } = useParams();

  return (
    <>
      <Media.Mobile>
        <DetailMobile />
      </Media.Mobile>
      <Media.PC>
        <DetailPC />
      </Media.PC>
      <Spacing size={100} />
    </>
  );
};

export default Detail;
