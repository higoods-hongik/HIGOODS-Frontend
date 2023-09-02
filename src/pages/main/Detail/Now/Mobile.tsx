import MobileContainer from "~/components/layout/MobileContainer";
import Summary from "../components/Summary";
import { Spacing } from "~/components/layout/Spacing";
import Profile from "../components/Profile";
import { FlexBox } from "~/components/layout/FlexBox";
import Button from "~/components/atoms/Button";
import { TimeLine } from "./components/TimeLine";
import { Notices } from "./components/Notices";

const NowMobile = () => {
  return (
    <MobileContainer>
      <Spacing size={16} />
      <Summary />
      <Spacing size={40} />
      <Button size="lg" color="red" fullWidth>
        구매 페이지로 가기
      </Button>
      <Spacing size={24} />
      <FlexBox justify={"space-between"}>
        <Profile schoolId="B811204" major="컴퓨터 공학과" name="한규진" />
        <Button size="sm" color="red20">
          문의하기
        </Button>
      </FlexBox>
      <Spacing size={48} />
      <TimeLine
        timeLines={[
          {
            date: "23.04.23",
            description: "수요조사를 어쩌구",
            title: "수요조사",
          },
          {
            date: "23.04.23",
            description: "수요조사를 어쩌구",
            title: "수요조사",
          },
          {
            date: "23.04.23",
            description: "수요조사를 어쩌구",
            title: "수요조사",
          },
        ]}
      />
      <Spacing size={48} />
      <Notices />
    </MobileContainer>
  );
};
export default NowMobile;
