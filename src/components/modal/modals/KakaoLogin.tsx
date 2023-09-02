import styled from "@emotion/styled";
import { Txt } from "~/components/atoms/Txt";
import { Spacing } from "~/components/layout/Spacing";
import { Modal } from "..";
import { ReactComponent as KakaoLogoIcon } from "~/assets/icon/kakao.svg";
import { css } from "@emotion/react";
import Media from "~/components/layout/Media";
import { media } from "~/styles/theme";
import { FlexBox } from "~/components/layout/FlexBox";

export const KakaoLogin = ({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
}) => {
  return (
    <Modal position="center" open={open} onClose={onClose}>
      <Media.Padding mobile={[16, 0]} pc={0}>
        <FlexBox direction={"column"}>
          <Media.Txt pc="heading.1" mobile="heading.3" as="div">
            로그인하기
          </Media.Txt>
          <Spacing size={16} />
          <Txt typo="body.1" as="div">
            현재 로그인되어 있지 않습니다.
          </Txt>
          <Txt typo="body.1" as="div">
            카카오톡으로 간편하게 로그인해보세요!
          </Txt>
          <Spacing size={24} />
          <KakaoLoginButton>
            <KakaoLogoIcon css={logoStyle} />
            <div css={css({ width: "100%", textAlign: "center" })}>
              카카오로 로그인하기
            </div>
          </KakaoLoginButton>
        </FlexBox>
      </Media.Padding>
    </Modal>
  );
};

const KakaoLoginButton = styled.button`
  position: relative;
  height: 54px;
  border-radius: 6px;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.85);
  ${media.mobile} {
    width: 100%;
  }
  ${media.pc} {
    min-width: 312px;
    margin: auto;
  }
  ${({ theme }) => theme.typo["body.1"]}
  font-weight: 600;
`;

const logoStyle = css`
  position: absolute;
  left: 14px;
  top: 18px;
`;
