import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import Button from "~/components/atoms/Button";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import { GridBox } from "~/components/layout/GridBox";
import { Spacing } from "~/components/layout/Spacing";
import { ReactComponent as CheckboxTrueIcon } from "~/assets/icon/check-true.svg";
import { ReactComponent as CheckboxFalseIcon } from "~/assets/icon/check-false.svg";
import { palette } from "~/styles/palette";
import { css } from "@emotion/react";
import { Notices } from "./components/Notices";

export const Post = () => {
  const { register, setValue, watch } = useForm<{
    title: string;
    content: string;
    alertTalk: boolean;
  }>();

  const handleChangeCheckbox = () => setValue("alertTalk", !watch("alertTalk"));

  return (
    <>
      <FlexBox gap={12} justify={"flex-start"}>
        <Txt typo="heading.1">공지 작성</Txt>
      </FlexBox>
      <Spacing size={44} />
      <GridBox gridTemplateColumns={"auto 252px"} gap={84}>
        <GridBox.Left>
          <TitleInput
            placeholder="공지 제목을 입력하세요."
            {...register("title")}
          />
          <Spacing size={20} />
          <ContentTextField
            placeholder="내용을 입력하세요."
            {...register("content")}
          />
          <Spacing size={32} />
          <FlexBox justify={"flex-start"}>
            <CheckBoxInput
              type="checkbox"
              id={"alertTalk"}
              value={"alertTalk"}
              name={"alertTalk"}
              onChange={handleChangeCheckbox}
            />
            <label htmlFor={"alertTalk"}>
              <Container gap={16}>
                {watch("alertTalk") ? (
                  <CheckboxTrueIcon />
                ) : (
                  <CheckboxFalseIcon />
                )}
                <Txt typo="body.2">
                  전체 구매자에게 알림톡을 발송하시겠습니까?{" "}
                  <span css={css({ color: palette.grey4 })}>
                    {" "}
                    (남은 횟수 : 3/3회)
                  </span>
                </Txt>
              </Container>
            </label>
          </FlexBox>
        </GridBox.Left>
        <GridBox.Right>
          <Spacing size={55} />
          <NoticeBox>
            <Txt color="red" typo="heading.4" as="div">
              공지 작성 가이드
            </Txt>
            <Spacing size={12} />
            <Txt typo="body.2">
              구매자들에게 공지할 내용을
              <br />
              업로드하면, 공구 페이지의 상단에
              <br />
              게시돼요. 정말 중요한 내용이라면
              <br />
              알림톡 발송 기능을 사용해보세요!
            </Txt>
            <Spacing size={12} />
            <Txt typo="body.2" color="grey4">
              ex. 업체 발주, 상품 발송 완료 등
            </Txt>
          </NoticeBox>
        </GridBox.Right>
      </GridBox>
      <Spacing size={60} />
      <FlexBox gap={24}>
        <Button color="red20" size="lg" width={312}>
          저장하기
        </Button>
        <Button color="red" size="lg" width={312}>
          업로드하기
        </Button>
      </FlexBox>
      <Spacing size={150} />
      <Txt typo="heading.2">지난 공지</Txt>
      <Notices
        notices={[
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

      <Spacing size={100} />
    </>
  );
};

const TitleInput = styled.input`
  ${({ theme }) => theme.typo["heading.3"]}
  padding-bottom: 8px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.black};
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.palette.black};

  &:placeholder-shown {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey4};
    color: ${({ theme }) => theme.palette.grey4};
  }
`;

const ContentTextField = styled.textarea`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.palette.grey4};
  color: ${({ theme }) => theme.palette.black};
  padding: 8px 14px;
  transition: all 0.2s ease;

  &:placeholder-shown {
    color: ${({ theme }) => theme.palette.grey4};
    border: 1px solid ${({ theme }) => theme.palette.grey2};
  }
`;

const NoticeBox = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.palette.grey1};
`;

const CheckBoxInput = styled.input`
  appearance: none;
`;
const Container = styled(FlexBox)``;
