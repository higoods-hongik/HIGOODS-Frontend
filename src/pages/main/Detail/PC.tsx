import styled from "@emotion/styled";
import Profile from "./components/Profile";
import Button from "~/components/atoms/Button";
import PcContainer from "~/components/layout/PcContainer";
import { Spacing } from "~/components/layout/Spacing";
import { FlexBox } from "~/components/layout/FlexBox";
import Filter from "~/components/Filter";

const DetailPC = () => {
  const handleChange = (name: string, value: string[]) => {
    console.log(name, value);
  };

  return (
    <PcContainer>
      <Spacing size={52} />
      <GridLayout>
        <div></div>
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
          <Filter.Box
            title="사이즈"
            name={"size"}
            folding
            onChange={handleChange}
          >
            <Filter.Option value="s">S</Filter.Option>
            <Filter.Option value="m">M</Filter.Option>
            <Filter.Option value="l">L</Filter.Option>
          </Filter.Box>
          <Spacing size={22} />
          <Filter.Box
            title="수령방식"
            name="delivery"
            folding
            defaultCheckedValue={["배송"]}
            onChange={handleChange}
          >
            <Filter.Option value="배송">배송</Filter.Option>
            <Filter.Option value="현장수령">현장 수령</Filter.Option>
          </Filter.Box>
        </div>
      </GridLayout>
    </PcContainer>
  );
};
export default DetailPC;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 648px 252px;
  column-gap: 24px;
`;
const ProfileBox = styled.div`
  height: 155px;
  border: 1px solid ${({ theme }) => theme.palette.black};
  padding: 24px;
`;
