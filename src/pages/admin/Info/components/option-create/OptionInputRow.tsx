import { css } from "@emotion/react";
import { ComponentProps, ReactNode } from "react";
import FormInputRow from "~/components/form/FormInputRow";
import { palette } from "~/styles/palette";
import { typo } from "~/styles/typo";

export const OptionInputRow = ({
  label,
  name,
  ...rest
}: { label: ReactNode; name: string } & ComponentProps<
  typeof FormInputRow
>) => {
  return (
    <FormInputRow
      name={name}
      label={label}
      variant="mobile"
      css={css`
        label {
          ${typo["label.2"]}
          color: ${palette.black};
        }
      `}
      {...rest}
    />
  );
};
