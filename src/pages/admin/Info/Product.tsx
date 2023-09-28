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
import { OptionCreate } from "./components/option-create";
import { useEffect } from "react";

type CategoryType = "CLOTHES" | "STUFF" | "OFFICE_SUPPLIES" | "ETC";

export type ProductCreateType = {
  productName: string;
  category: CategoryType;
  options: OptionCreateType[];
};

export type OptionCreateType = {
  optionTitle: string;
  optionChoice: { optionChoiceName: string; optionPrice: string }[];
};

const defaultValues: ProductCreateType = {
  productName: "",
  category: "CLOTHES",
  options: [
    {
      optionTitle: "",
      optionChoice: [{ optionChoiceName: "", optionPrice: "" }],
    },
  ],
};

export const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const method = useForm<ProductCreateType>({
    defaultValues: defaultValues,
  });
  const { register, watch, setValue } = method;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FlexBox gap={12} justify={"flex-start"}>
        <Txt typo="heading.1">상품 정보 이력</Txt>
        <Txt typo="heading.4" color="red">
          (2/3 단계)
        </Txt>
      </FlexBox>
      <Spacing size={24} />
      <GridBox gridTemplateColumns={"auto 252px"} gap={84}>
        <GridBox.Left>
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
              <FormRadioButton
                name="category"
                value={"CLOTHES"}
                onClick={() => setValue("category", "CLOTHES")}
              >
                의류
              </FormRadioButton>
              <FormRadioButton
                name="category"
                value={"STUFF"}
                onClick={() => setValue("category", "STUFF")}
              >
                잡화
              </FormRadioButton>
              <FormRadioButton
                name="category"
                value={"OFFICE_SUPPLIES"}
                onClick={() => setValue("category", "OFFICE_SUPPLIES")}
              >
                문구
              </FormRadioButton>
              <FormRadioButton
                name="category"
                value={"ETC"}
                onClick={() => setValue("category", "ETC")}
              >
                기타
              </FormRadioButton>
            </GridBox>

            <Spacing size={52} />
            <Txt typo="heading.4" as="div">
              상품의 세부 옵션을 선택해주세요.
            </Txt>
            <Spacing size={20} />
            {watch("options").map((_, i) => (
              <OptionCreate optionIndex={i} />
            ))}
            <Button
              size="sm"
              color="lineBlack"
              css={css({ margin: "52px auto 0 auto" })}
              onClick={() =>
                setValue("options", [
                  ...watch("options"),
                  {
                    optionTitle: "",
                    optionChoice: [{ optionChoiceName: "", optionPrice: "" }],
                  },
                ])
              }
            >
              + 옵션 추가하기
            </Button>
          </FormProvider>
        </GridBox.Left>
        <GridBox.Right>
          <Spacing size={326} />
          <NoticeBox>
            <Txt color="red" typo="heading.4" as="div">
              옵션 설정 가이드
            </Txt>
            <Spacing size={12} />
            <Txt typo="body.2">
              상품의 종류가 여러 개인가요?
              <br />
              옵션을 입력해서 공구 참여자들이
              <br />
              원하는 선택지를 고르게 할 수 있고,
              <br />
              선택지별로 가격 설정도 가능해요.
            </Txt>
            <Spacing size={12} />
            <Txt typo="body.2" color="grey4">
              ex. 의류 상품 {">"} '사이즈' 옵션 추가
              <br />
              {"        >"} S, M, L 선택지 추가
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
          onClick={() => navigate(`/admin/${id}/info/detail`)}
        >
          다음으로 (2/3)
        </Button>
      </FlexBox>
      <Spacing size={100} />
    </>
  );
};

const FormInput = styled(Input)`
  margin-top: 12px;
`;

const NoticeBox = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.palette.grey1};
`;
