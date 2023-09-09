import styled from "@emotion/styled";
import { GridBox } from "~/components/layout/GridBox";
import { OptionInputRow } from "./OptionInputRow";
import { ReactComponent as WonIcon } from "~/assets/icon/won-icon.svg";
import { css } from "@emotion/react";
import { useFormContext } from "react-hook-form";
import { Txt } from "~/components/atoms/Txt";
import { ProductCreateType } from "../../Product";

export const OptionChoice = ({
  optionIndex,
  index,
}: {
  optionIndex: number;
  index: number;
}) => {
  const { register, watch, setValue } = useFormContext<ProductCreateType>();
  const optionChoicePath = `options.${optionIndex}.optionChoice` as const;

  const handleClickDeleteOptionChoice = () => {
    const current = [...watch(`${optionChoicePath}`)];
    setValue(
      optionChoicePath,
      current.filter((_, i) => i !== index)
    );
  };

  return (
    <GridBox
      gridTemplateColumns={"60px 228px 228px"}
      gap={24}
      css={css({ marginTop: 12 })}
    >
      <L_box />
      <OptionInputRow
        label={
          <>
            <span css={css({ width: 54, display: "inline-block" })}>
              선택지 {index + 1}
            </span>
            {watch(optionChoicePath).length > 1 && (
              <Txt
                color="grey6"
                typo="label.1"
                css={css({
                  textDecorationLine: "underline",
                  cursor: "pointer",
                  marginLeft: 5,
                })}
                onClick={handleClickDeleteOptionChoice}
              >
                삭제
              </Txt>
            )}
          </>
        }
        {...register(`${optionChoicePath}.${index}.optionChoiceName`)}
      />
      <OptionInputRow
        label="가격"
        leftAddon={<WonIcon />}
        placeholder="금액을 입력하세요."
        {...register(`${optionChoicePath}.${index}.optionPrice`)}
      />
    </GridBox>
  );
};

const L_box = styled.div`
  width: 30px;
  height: 52px;
  margin-left: auto;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey2};
  border-left: 1px solid ${({ theme }) => theme.palette.grey2};
`;
