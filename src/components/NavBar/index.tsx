import MediaQuery from "../layout/MediaQuery";
import PcNavBar from "./PcNavBar";
import MobileNavBar from "./MobileNavBar";
import Spacing from "../layout/Spacing";

const NavBar = () => {
  return (
    <>
      <MediaQuery.PC>
        <PcNavBar />
      </MediaQuery.PC>
      <MediaQuery.Mobile>
        <MobileNavBar />
      </MediaQuery.Mobile>
      <Spacing size={54} />
    </>
  );
};

export default NavBar;
