import { css } from "@emotion/react";
import { useFormContext } from "react-hook-form";
import { Txt } from "~/components/atoms/Txt";
import Input from "~/components/form/Input";
import { Spacing } from "~/components/layout/Spacing";
import { UnderLineInput } from "~/components/under-line-input";
import { CustomQuestion } from "..";

export const Subjective = ({ index }: { index: number }) => {
  const { setValue, watch, register } = useFormContext<{
    questions: CustomQuestion[];
  }>();

  const handleClickDeleteQuestion = () => {
    const current = [...watch(`questions`)];

    setValue(
      "questions",
      current.filter((_, i) => i !== index)
    );
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
      <Spacing size={12} />
      <Input placeholder="내용을 입력하세요." disabled />
    </>
  );
};
