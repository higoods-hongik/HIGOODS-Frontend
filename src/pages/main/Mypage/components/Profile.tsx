import styled from "@emotion/styled";
import Button from "~/components/atoms/Button";
import Media from "~/components/layout/Media";
import { Spacing } from "~/components/layout/Spacing";
import { media } from "~/styles/theme";

interface ProfileProps {
  name: string;
  schoolId: string;
  major: string;
}

const Profile = ({ name, schoolId, major }: ProfileProps) => {
  return (
    <Wrapper>
      <ProfileImage />
      <ProfileInfo>
        <div className="name">{name}</div>
        <Spacing size={8} />
        <div className="id">
          {schoolId} {major}
        </div>
        <Media.Spacing mobile={16} pc={22} />
        <Media.PC>
          <Button size="sm" color="red20">
            내 정보 수정하기
          </Button>
        </Media.PC>
        <Media.Mobile>
          <Button size="sm" color="red20">
            수정하기
          </Button>
        </Media.Mobile>
      </ProfileInfo>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;

  ${media.mobile} {
    width: 200px;
    gap: 14px;
    transform: translateX(-12px);
  }
  ${media.pc} {
    width: 293px;
    gap: 24px;
    transform: translateX(-93px);
  }
`;

const ProfileImage = styled.div`
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.palette.grey4};
  border-radius: 50%;
  ${media.mobile} {
    width: 105px;
    height: 105px;
  }
  ${media.pc} {
    width: 144px;
    height: 144px;
  }
`;

const ProfileInfo = styled.div`
  .name {
    ${media.pc} {
      ${({ theme }) => theme.typo["heading.1"]}
    }
    ${media.mobile} {
      ${({ theme }) => theme.typo["heading.3"]}
    }
  }
  .id {
    white-space: nowrap;
    ${media.pc} {
      ${({ theme }) => theme.typo["body.1"]}
    }
    ${media.mobile} {
      ${({ theme }) => theme.typo["label.2"]}
    }
  }
`;
