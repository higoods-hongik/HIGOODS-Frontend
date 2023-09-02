import styled from "@emotion/styled";
import Profile from "./components/Profile";
import Button from "~/components/atoms/Button";
import PcContainer from "~/components/layout/PcContainer";
import { Spacing } from "~/components/layout/Spacing";
import { FlexBox } from "~/components/layout/FlexBox";
import SelectOption from "./components/SelectOption";
import Summary from "./components/Summary";
import DetailInfo from "./components/DetailInfo";

const DetailPC = () => {
  return (
    <PcContainer>
      <Spacing size={52} />
      <GridLayout>
        <div>
          <Summary />
          <Spacing size={72} />
          <DetailInfo />
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
          <Spacing size={22} />
          <SelectOption />
        </div>
      </GridLayout>
    </PcContainer>
  );
};
export default DetailPC;

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
