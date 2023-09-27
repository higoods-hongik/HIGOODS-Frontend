import { css } from "@emotion/react";
import Button from "~/components/atoms/Button";
import { Txt } from "~/components/atoms/Txt";
import { FlexBox } from "~/components/layout/FlexBox";
import { GridBox } from "~/components/layout/GridBox";
import { Spacing } from "~/components/layout/Spacing";
import { palette } from "~/styles/palette";
import { BasicForm } from "./components/BasicForm";
import { FormQuestionRemote } from "./components/FormQuestionRemote";
import { MultipleChoice } from "./components/MultipleChoice";
import { Subjective } from "./components/Subjective";
import { FormProvider, useForm } from "react-hook-form";
import { match } from "ts-pattern";

export type QuestionType = "subjective" | "multipleChoice";
export type CustomQuestion = {
  type: QuestionType;
  title: string;
  options: string[];
};

const initialQuestion: Record<QuestionType, CustomQuestion> = {
  subjective: { type: "subjective", title: "", options: [] },
  multipleChoice: {
    type: "multipleChoice",
    title: "",
    options: [""],
  },
};

const OrderForm = () => {
  const method = useForm<{ questions: CustomQuestion[] }>({
    defaultValues: { questions: [] },
  });
  const { watch, setValue } = method;

  console.log(watch());

  return (
    <>
      <GridBox gridTemplateColumns={"auto 252px"} gap={84}>
        <GridBox.Left>
          <Txt typo="heading.2" as="div" css={subTitleStyle}>
            기본항목은 수정이 불가합니다
          </Txt>
          <BasicForm shipmentType="both" />

          <Spacing size={48} />
          <Txt typo="heading.2" as="div" css={subTitleStyle}>
            추가 항목을 입력하세요
          </Txt>
          <FormProvider {...method}>
            {watch("questions").map((question, index) =>
              match(question.type)
                .with("multipleChoice", () => (
                  <MultipleChoice index={index} key={index} />
                ))
                .with("subjective", () => (
                  <Subjective index={index} key={index} />
                ))
                .exhaustive()
            )}
          </FormProvider>
        </GridBox.Left>

        <GridBox.Right css={stickyLikeStyle}>
          {/* @TODO api 나오면 그때 작업하기 */}
          <FormQuestionRemote
            onAddMultipleChoice={() =>
              setValue("questions", [
                ...watch("questions"),
                initialQuestion.multipleChoice,
              ])
            }
            onAddSubjective={() =>
              setValue("questions", [
                ...watch("questions"),
                initialQuestion.subjective,
              ])
            }
          />
        </GridBox.Right>
      </GridBox>
      <Spacing size={80} />
      <FlexBox gap={24}>
        <Button color="red20" size="lg" width={312}>
          저장하기
        </Button>
        <Button color="red" size="lg" width={312}>
          업로드하기
        </Button>
      </FlexBox>
      <Spacing size={100} />
    </>
  );
};

export default OrderForm;

const subTitleStyle = css({
  paddingBottom: 8,
  width: "100%",
  borderBottom: `1px solid ${palette.black}`,
});

const stickyLikeStyle = css({
  paddingTop: 32,
  position: "fixed",
  marginLeft: 732,
  width: 252,
});
