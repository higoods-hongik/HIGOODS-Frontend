import { css } from "@emotion/react";
import { ComponentProps, ReactNode, forwardRef, useState } from "react";
import { palette } from "~/styles/palette";
import { typo } from "~/styles/typo";
import { FlexBox } from "../layout/FlexBox";

interface InputProps extends ComponentProps<"input"> {
  fullWidth?: boolean;
  leftAddon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      fullWidth = false,
      leftAddon,
      className,
      type = "text",
      ...rest
    }: InputProps,
    ref
  ) => {
    const [focused, setFocused] = useState(false);

    return (
      <FlexBox
        justify={"flex-start"}
        css={containerStyle(!value || value === "", fullWidth, focused)}
        className={className}
        gap={8}
      >
        {leftAddon}
        <input
          value={value}
          ref={ref}
          type={type}
          id={rest.name}
          {...rest}
          css={inputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {type === "file" && (
          <label
            htmlFor={rest.name}
            css={css({
              width: "100%",
              height: "100%",
              paddingTop: "9.5px",
            })}
          >
            파일 업로드하기
          </label>
        )}
      </FlexBox>
    );
  }
);

export default Input;

const inputStyle = css`
  height: 100%;
  width: 100%;
  ${typo["body.1"]}
  color : ${palette.grey6};
  &:focus {
    color: ${palette.black};
  }

  &:placeholder-shown {
    ${typo["body.1"]}
    color : ${palette.grey6};
  }

  transition: all 0.2s ease;

  &[type="file"] {
    display: none;
  }
`;

const containerStyle = (
  isEmpty: boolean,
  fullWidth: boolean,
  focused: boolean
) => css`
  width: ${fullWidth ? "100%" : "auto"};
  height: 42px;
  box-sizing: border-box;
  border: 1px solid ${palette.grey6};

  transition: all 0.2s ease;
  padding: 0 14px;

  ${isEmpty &&
  css`
    color: ${palette.grey4};
    border: 1px solid ${palette.grey2};
  `}

  ${focused &&
  css`
    border: 1px solid ${palette.red};
  `}
`;
