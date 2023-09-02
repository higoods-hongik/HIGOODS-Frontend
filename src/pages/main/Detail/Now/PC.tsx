import styled from "@emotion/styled";
import Profile from "../components/Profile";
import Button from "~/components/atoms/Button";
import PcContainer from "~/components/layout/PcContainer";
import { Spacing } from "~/components/layout/Spacing";
import { FlexBox } from "~/components/layout/FlexBox";
import Summary from "../components/Summary";
import { TimeLine } from "./components/TimeLine";
import { Notices } from "./components/Notices";

const NowPC = () => {
  return (
    <PcContainer>
      <Spacing size={52} />
      <GridLayout>
        <div>
          <Summary />
          <Spacing size={72} />
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
          <Spacing size={60} />
          <Notices />
        </div>
        <div>
          <ProfileBox>
            <Profile schoolId="B811204" major="컴퓨터 공학과" name="한규진" />
            <Spacing size={24} />
            <FlexBox>
              <Button color="red20" size="sm">
                문의하기
              </Button>
            </FlexBox>
          </ProfileBox>
          <Spacing size={32} />
          <Button color="red" size="lg" fullWidth>
            구매 페이지로 가기
          </Button>
        </div>
      </GridLayout>
    </PcContainer>
  );
};
export default NowPC;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 648px 252px;
  column-gap: 84px;
`;
const ProfileBox = styled.div`
  height: 155px;
  border: 1px solid ${({ theme }) => theme.palette.black};
  padding: 24px;
`;
