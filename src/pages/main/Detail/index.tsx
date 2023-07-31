import Media from "~/components/layout/Media";
import DetailMobile from "./Mobile";
import DetailPC from "./PC";

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
    </>
  );
};

export default Detail;
