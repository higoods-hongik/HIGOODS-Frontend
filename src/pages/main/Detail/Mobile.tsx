import MobileContainer from "~/components/layout/MobileContainer";
import SelectOption from "./components/SelectOption";
import Summary from "./components/Summary";
import { Spacing } from "~/components/layout/Spacing";
import DetailInfo from "./components/DetailInfo";
import Profile from "./components/Profile";
import { FlexBox } from "~/components/layout/FlexBox";
import Button from "~/components/atoms/Button";

const DetailMobile = () => {
  return (
    <MobileContainer>
      <Spacing size={16} />
      <Summary />
      <Spacing size={24} />
      <SelectOption />
      <Spacing size={40} />
      <DetailInfo />
      <Spacing size={24} />
      <FlexBox justify={"space-between"}>
        <Profile schoolId="B811204" major="컴퓨터 공학과" name="한규진" />
        <Button size="sm" color="line">
          문의하기
        </Button>
      </FlexBox>
    </MobileContainer>
  );
};
export default DetailMobile;
