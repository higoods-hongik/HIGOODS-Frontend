import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "~/components/atoms/Button";
import { Txt } from "~/components/atoms/Txt";
import { FormRadioButton } from "~/components/form/FormRadioButton";
import Input from "~/components/form/Input";
import { FlexBox } from "~/components/layout/FlexBox";
import { GridBox } from "~/components/layout/GridBox";
import { Spacing } from "~/components/layout/Spacing";

export const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const method = useForm();
  const { register, watch } = method;
  return (
    <>
      <FlexBox gap={12} justify={"flex-start"}>
        <Txt typo="heading.1">상품 정보 이력</Txt>
        <Txt typo="heading.4" color="red">
          (1/2 단계)
        </Txt>
      </FlexBox>
      <Spacing size={24} />
      <GridBox gridTemplateColumns={"auto 252px"} gap={84}>
        <그리드_왼쪽영역>
          <FormProvider {...method}>
            <Txt typo="heading.4" required as="div">
              상품명을 입력해주세요.
            </Txt>
            <FormInput
              fullWidth
              placeholder="내용을 입력하세요."
              value={watch("productName")}
              {...register("productName")}
            />

            <Spacing size={52} />
            <Txt typo="heading.4" required as="div">
              상품의 카테고리를 선택해주세요.
            </Txt>
            <GridBox
              gridTemplateColumns={"repeat(4, 1fr)"}
              gap={18}
              css={css({ marginTop: 12 })}
            >
              <FormRadioButton name="category" value={"CLOTHES"}>
                의류
              </FormRadioButton>
              <FormRadioButton name="category" value={"STUFF"}>
                잡화
              </FormRadioButton>
              <FormRadioButton name="category" value={"OFFICE_SUPPLIES"}>
                문구
              </FormRadioButton>
              <FormRadioButton name="category" value={"ETC"}>
                기타
              </FormRadioButton>
            </GridBox>
          </FormProvider>
        </그리드_왼쪽영역>
        <그리드_오른쪽영역>
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
        </그리드_오른쪽영역>
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

const FormInput = styled(Input)`
  margin-top: 12px;
`;
const 그리드_왼쪽영역 = styled.div``;
const 그리드_오른쪽영역 = styled.div``;

const NoticeBox = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.palette.grey1};
`;
