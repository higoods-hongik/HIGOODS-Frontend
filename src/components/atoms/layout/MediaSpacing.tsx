import MediaQuery from "./MediaQuery";
import Spacing from "./Spacing";

const MediaSpacing = ({ mobile, pc }: { mobile: number; pc: number }) => {
  return (
    <>
      <MediaQuery.PC>
        <Spacing size={pc} />
      </MediaQuery.PC>
      <MediaQuery.Mobile>
        <Spacing size={mobile} />
      </MediaQuery.Mobile>
    </>
  );
};

export default MediaSpacing;
