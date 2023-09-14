import { css } from "@emotion/react";
import { Txt } from "~/components/atoms/Txt";
import Input from "~/components/form/Input";
import { Spacing } from "~/components/layout/Spacing";
import { UnderLineInput } from "~/components/under-line-input";

export const Subjective = () => {
  return (
    <>
      <Spacing size={32} />
      <UnderLineInput
        size="lg"
        placeholder="항목을 입력하세요."
        rightAddon={
          <Txt
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
