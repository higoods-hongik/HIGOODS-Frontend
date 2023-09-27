import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as UploadIcon } from "~/assets/icon/input-upload.svg";
import Button from "~/components/atoms/Button";
import { Txt } from "~/components/atoms/Txt";
import { FormRadioButton } from "~/components/form/FormRadioButton";
import Input from "~/components/form/Input";
import { FlexBox } from "~/components/layout/FlexBox";
import { GridBox } from "~/components/layout/GridBox";
import { Spacing } from "~/components/layout/Spacing";

export const Basic = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const method = useForm();
  const { register, watch } = method;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FlexBox gap={12} justify={"flex-start"}>
        <Txt typo="heading.1">프로젝트 정보 이력</Txt>
        <Txt typo="heading.4" color="red">
          (1/3 단계)
        </Txt>
      </FlexBox>
      <Spacing size={24} />
      <GridBox gridTemplateColumns={"auto 252px"} gap={84}>
        <GridBox.Left>
          <FormProvider {...method}>
            <Txt typo="heading.4" required as="div">
              공구 프로젝트의 제목을 입력해주세요.
            </Txt>
            <Input
              css={css({ marginTop: 12 })}
              fullWidth
              placeholder="내용을 입력하세요."
              value={watch("title")}
              {...register("title")}
            />

            <Spacing size={52} />
            <Txt typo="heading.4" required as="div">
              공구 프로젝트에 대한 한 줄 소개를 작성해주세요.
            </Txt>
            <Input
              css={css({ marginTop: 12 })}
              fullWidth
              placeholder="내용을 입력하세요."
              value={watch("description")}
              {...register("description")}
            />

            <Spacing size={52} />
            <Txt typo="heading.4" required as="div">
              배송 / 현장 배부 여부를 선택해주세요.
            </Txt>
            <GridBox
              gridTemplateColumns={"repeat(3, 1fr)"}
              gap={18}
              css={css({ marginTop: 12 })}
            >
              <FormRadioButton name="shipment" value={"delivery"}>
                배송만
              </FormRadioButton>
              <FormRadioButton name="shipment" value={"distribution"}>
                현장 배부만
              </FormRadioButton>
              <FormRadioButton name="shipment" value={"both"}>
                둘다 진행
              </FormRadioButton>
            </GridBox>

            <Spacing size={52} />
            <GridBox gap={24} gridTemplateColumns={"1fr 1fr"}>
              <div>
                <Txt typo="heading.4" as="div">
                  주문 마감기한 날짜를 지정해주세요.
                </Txt>
                <Input
                  css={css({ marginTop: 12 })}
                  fullWidth
                  placeholder="내용을 입력하세요."
                  value={watch("endDate")}
                  {...register("endDate")}
                />
              </div>
              <div>
                <Txt typo="heading.4" as="div">
                  공구에 필요한 최소 구매 인원을 설정해주세요
                </Txt>
                <Input
                  css={css({ marginTop: 12 })}
                  fullWidth
                  placeholder="내용을 입력하세요."
                  value={watch("minCount")}
                  {...register("minCount")}
                />
              </div>
            </GridBox>
            <Spacing size={52} />
            <Txt typo="heading.4" as="div">
              파일 업로드 하기
            </Txt>
            <Input
              css={css({ marginTop: 12 })}
              fullWidth
              type="file"
              leftAddon={<UploadIcon />}
              placeholder="내용을 입력하세요."
              {...register("thumbnail")}
            />
          </FormProvider>
        </GridBox.Left>
        <GridBox.Right>
          <Spacing size={546} />
          <NoticeBox>
            <Txt color="red" typo="heading.4" as="div">
              이미지 가이드
            </Txt>
            <Spacing size={12} />
            <Txt typo="body.2">
              샘플이 있다면 촬영한 이미지를,
              <br />
              없다면 도안 등의 참고 이미지를
              <br />
              첨부해보세요!
            </Txt>
          </NoticeBox>
        </GridBox.Right>
      </GridBox>
      <Spacing size={60} />
      <FlexBox gap={24}>
        <Button color="red20" size="lg" width={312}>
          저장하기
        </Button>
        <Button
          color="red"
          size="lg"
          width={312}
          onClick={() => navigate(`/admin/${id}/info/product`)}
        >
          다음으로 (1/3)
        </Button>
      </FlexBox>
      <Spacing size={100} />
    </>
  );
};

const NoticeBox = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.palette.grey1};
`;
