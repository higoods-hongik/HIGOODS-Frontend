import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FormProvider, useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import InputRow from "~/components/form/FormInputRow";
import Button from "~/components/atoms/Button";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import Media from "~/components/layout/Media";
import MobileContainer from "~/components/layout/MobileContainer";
import PcContainer from "~/components/layout/PcContainer";
import { media, theme } from "~/styles/theme";
import { InfoProfileImage } from "./components/InfoProfileImage";

const MyInfo = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const method = useForm();
  const isAuthed = false;

  return (
    <>
      <MobileContainer>
        <PcContainer css={css({ maxWidth: 480 })}>
          <Media.Spacing mobile={36} pc={80} />
          <Media.Txt
            mobile="heading.3"
            pc="heading.1"
            css={css({ textAlign: "center", width: " 100%" })}
            as="div"
          >
            내 정보 관리
          </Media.Txt>
          <Media.Spacing mobile={24} pc={48} />
          <InfoProfileImage />
          <FormProvider {...method}>
            <InputRowContainer>
              <InputRow label="닉네임" name="nickName" variant="mobile" />
            </InputRowContainer>
            {isMobile ? (
              <>
                <InputRowContainer>
                  <InputRow label="학과" name="major" variant="mobile" />
                </InputRowContainer>
                <InputRowContainer>
                  <InputRow label="학번" name="schoolId" variant="mobile" />
                </InputRowContainer>
              </>
            ) : (
              <InputRowContainer>
                <InputRow label="학과" name="major" variant="mobile" />
                <InputRow label="학번" name="schoolId" variant="mobile" />
              </InputRowContainer>
            )}
            <Txt
              typo="label.2"
              color="red"
              css={css({ marginTop: 12, display: "block" })}
            >
              * 학과와 학번은 6개월에 한 번만 수정 가능합니다.
            </Txt>
            <InputRowContainer css={css({ alignItems: "end" })}>
              <InputRow label="이메일" name="major" variant="mobile" />
              <Button
                color={isAuthed ? "lineGray" : "red20"}
                size="md"
                css={css`
                  width: ${isMobile ? 105 : 144}px;
                  ${isMobile && theme.typo["label.2"]}
                `}
              >
                {isAuthed ? "인증완료" : "인증하기"}
              </Button>
            </InputRowContainer>
            <Media.Spacing mobile={36} pc={80} />
            <Button
              color="red"
              size="lg"
              css={css({ width: isMobile ? "100%" : 312, margin: "auto" })}
            >
              완료하기
            </Button>
          </FormProvider>
        </PcContainer>
      </MobileContainer>
    </>
  );
};
export default MyInfo;

const InputRowContainer = styled(FlexBox)`
  ${media.pc} {
    margin-top: 24px;
    gap: 24px;
  }
  ${media.mobile} {
    margin-top: 16px;
    gap: 14px;
  }
`;
