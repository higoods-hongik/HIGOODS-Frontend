import { css } from "@emotion/react";
import { Txt } from "~/components/atoms/Txt";
import { GridBox } from "~/components/layout/GridBox";
import { UnderLineInput } from "~/components/under-line-input";
import { ReactComponent as MockCheckBox } from "~/assets/icon/check-mock.svg";
import { Spacing } from "~/components/layout/Spacing";
import { palette } from "~/styles/palette";
import { useFormContext } from "react-hook-form";
import { CustomQuestion } from "..";
import { ComponentPropsWithRef } from "react";

export const MultipleChoice = ({ index }: { index: number }) => {
  const { setValue, watch, register } = useFormContext<{
    questions: CustomQuestion[];
  }>();
  const optionPath = `questions.${index}.options` as const;

  const handleClickDeleteQuestion = () => {
    const current = [...watch(`questions`)];

    setValue(
      "questions",
      current.filter((_, i) => i !== index)
    );
  };

  const handleClickAddQuestionChoice = () => {
    setValue(optionPath, [...watch(optionPath), ""]);
  };

  return (
    <>
      <Spacing size={32} />
      <UnderLineInput
        size="lg"
        placeholder="항목을 입력하세요."
        {...register(`questions.${index}.title`)}
        rightAddon={
          <Txt
            onClick={handleClickDeleteQuestion}
            color="grey6"
            typo="label.1"
            css={css({
              textDecorationLine: "underline",
              cursor: "pointer",
              marginLeft: 5,
              flexShrink: 0,
            })}
          >
            항목 삭제
          </Txt>
        }
      />
      <Spacing size={32} />
      {watch(optionPath).map((_, i) => (
        <ChoiceInput choiceIndex={i} optionIndex={index} />
      ))}

      <Spacing size={24} />
      <Txt
        color="red"
        typo="label.1"
        onClick={handleClickAddQuestionChoice}
        css={css({
          textDecorationLine: "underline",
          cursor: "pointer",
          marginLeft: 83,
        })}
      >
        선택지 추가하기
      </Txt>

      <Spacing
        size={32}
        css={css({ borderBottom: `1px solid ${palette.grey2}` })}
      />
    </>
  );
};

const ChoiceInput = ({
  optionIndex,
  choiceIndex,
}: { optionIndex: number; choiceIndex: number } & Omit<
  ComponentPropsWithRef<"input">,
  "size"
>) => {
  const { watch, setValue, register } = useFormContext<{
    questions: CustomQuestion[];
  }>();
  const optionPath = `questions.${optionIndex}.options` as const;

  const handleClickDeleteQuestion = () => {
    const current = [...watch(`questions`)];

    setValue(
      "questions",
      current.filter((_, i) => i !== optionIndex)
    );
  };

  const handleDeleteChoice = () => {
    const current = [...watch(optionPath)];
    if (watch(optionPath).length === 1) {
      handleClickDeleteQuestion();
      return;
    }

    setValue(
      optionPath,
      current.filter((_, i) => i !== choiceIndex)
    );
  };

  return (
    <GridBox
      gap={24}
      gridTemplateColumns={"60px auto"}
      css={css`
        margin-top: 12px;
        & > svg {
          margin-left: auto;
        }
      `}
    >
      <MockCheckBox />
      <UnderLineInput
        size="sm"
        placeholder="선택지를 입력하세요."
        placeholderWidth={138}
        {...register(`${optionPath}.${choiceIndex}`)}
        rightAddon={
          <Txt
            color="grey6"
            typo="label.1"
            onClick={handleDeleteChoice}
            css={css({
              textDecorationLine: "underline",
              cursor: "pointer",
              marginLeft: 5,
              flexShrink: 0,
            })}
          >
            선택지 삭제
          </Txt>
        }
      />
    </GridBox>
  );
};
