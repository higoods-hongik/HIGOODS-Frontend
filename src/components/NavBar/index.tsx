import MediaQuery from "../atoms/MediaQuery";
import PcNavBar from "./PcNavBar";
import MobileNavBar from "./MobileNavBar";
import Spacing from "../atoms/Spacing";

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
