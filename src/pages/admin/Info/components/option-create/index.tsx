import { GridBox } from "~/components/layout/GridBox";
import { Txt } from "~/components/atoms/Txt";
import { OptionInputRow } from "./OptionInputRow";
import { OptionChoice } from "./OptionChoice";
import { useFormContext } from "react-hook-form";
import { css } from "@emotion/react";
import { Spacing } from "~/components/layout/Spacing";
import { ProductCreateType } from "../../Product";
import { palette } from "~/styles/palette";

export const OptionCreate = ({ optionIndex }: { optionIndex: number }) => {
  const method = useFormContext<ProductCreateType>();
  const { register, watch, setValue } = method;

  const handleClickDeleteOption = () => {
    const current = [...watch("options")];
    setValue(
      "options",
      current.filter((_, i) => i !== optionIndex)
    );
  };

  return (
    <GridBox
      gridTemplateColumns={"60px auto"}
      gap={24}
      css={{ padding: "26px 0px", borderBottom: `1px solid ${palette.grey2}` }}
    >
      <Txt typo="heading.4">옵션 {optionIndex + 1}</Txt>
      <div>
        <OptionInputRow
          label={
            <>
              <span css={css({ width: 54, display: "inline-block" })}>
                옵션 이름
              </span>
              <Txt
                color="red"
                typo="label.1"
                onClick={handleClickDeleteOption}
                css={css({
                  textDecorationLine: "underline",
                  cursor: "pointer",
                  marginLeft: 5,
                })}
              >
                삭제
              </Txt>
            </>
          }
          {...register(`options.${optionIndex}.optionTitle`)}
        />
        {watch(`options.${optionIndex}.optionChoice`).map((_, index) => (
          <OptionChoice optionIndex={optionIndex} index={index} {...method} />
        ))}

        <Spacing size={20} />
        <Txt
          color="red"
          typo="label.1"
          onClick={() =>
            setValue(`options.${optionIndex}.optionChoice`, [
              ...watch(`options.${optionIndex}.optionChoice`),
              { optionChoiceName: "", optionPrice: "" },
            ])
          }
          css={css({
            textDecorationLine: "underline",
            cursor: "pointer",
            marginLeft: 84,
          })}
        >
          옵션 1에 선택지 추가하기
        </Txt>
      </div>
    </GridBox>
  );
};
