import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Button from "~/components/atoms/Button";
import { FlexBox } from "~/components/layout/FlexBox";
import Media from "~/components/layout/Media";
import MobileContainer from "~/components/layout/MobileContainer";
import PcContainer from "~/components/layout/PcContainer";
import { Spacing } from "~/components/layout/Spacing";
import { PrivateClick } from "~/components/utils/PrivateClick";
import { media } from "~/styles/theme";

interface ProfileProps {
  name: string;
  schoolId: string;
  major: string;
}

const Profile = ({ name, schoolId, major }: ProfileProps) => {
  const navigate = useNavigate();
  return (
    <MobileContainer>
      <PcContainer>
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
              <FlexBox gap={12}>
                <PrivateClick>
                  <Button
                    size="sm"
                    color="red20"
                    onClick={() => navigate("/mypage/info")}
                  >
                    내 정보 수정하기
                  </Button>
                </PrivateClick>
                <Button size="sm" color="lineGray">
                  로그아웃
                </Button>
              </FlexBox>
            </Media.PC>
            <Media.Mobile>
              <FlexBox gap={12}>
                <PrivateClick>
                  <Button size="sm" color="red20">
                    수정하기
                  </Button>
                </PrivateClick>
                <Button size="sm" color="lineGray">
                  로그아웃
                </Button>
              </FlexBox>
            </Media.Mobile>
          </ProfileInfo>
        </Wrapper>
      </PcContainer>
    </MobileContainer>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;

  ${media.mobile} {
    gap: 14px;
  }
  ${media.pc} {
    gap: 24px;
    transform: translateX(268px);
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
