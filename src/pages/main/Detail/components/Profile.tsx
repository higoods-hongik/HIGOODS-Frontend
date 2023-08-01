import styled from "@emotion/styled";
import { FlexBox } from "~/components/layout/FlexBox";

interface ProfileProps {
  name: string;
  schoolId: string;
  major: string;
}

const Profile = ({ name, schoolId, major }: ProfileProps) => {
  return (
    <FlexBox gap={24}>
      <ProfileImage />
      <ProfileInfo>
        <div className="name">{name}</div>
        <div className="id">
          {schoolId} {major}
        </div>
      </ProfileInfo>
    </FlexBox>
  );
};

export default Profile;

const ProfileImage = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.grey2};
`;
const ProfileInfo = styled.div`
  .name {
    ${({ theme }) => theme.typo["heading.4"]}
  }
  .id {
    white-space: nowrap;
    ${({ theme }) => theme.typo["body.2"]}
  }
`;
