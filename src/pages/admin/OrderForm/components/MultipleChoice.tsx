import { css } from "@emotion/react";
import { Txt } from "~/components/atoms/Txt";
import { GridBox } from "~/components/layout/GridBox";
import { UnderLineInput } from "~/components/under-line-input";
import { ReactComponent as MockCheckBox } from "~/assets/icon/check-mock.svg";
import { Spacing } from "~/components/layout/Spacing";
import { palette } from "~/styles/palette";

export const MultipleChoice = () => {
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
      <Spacing size={32} />
      <ChoiceInput />
      <ChoiceInput />

      <Spacing size={24} />
      <Txt
        color="red"
        typo="label.1"
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

const ChoiceInput = () => {
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
            선택지 삭제
          </Txt>
        }
      />
    </GridBox>
  );
};
