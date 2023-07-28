import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { Spacing as BaseSpacing } from "./Spacing";
import { Padding as BasePadding, PaddingProps, PaddingSize } from "./Padding";
import React from "react";
import { Txt as BaseTxt } from "~/components/atoms/Txt";
import { TextProps } from "../atoms/Txt";
import { typo } from "~/styles/typo";

const Mobile = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const PC = ({ children }: { children: ReactNode }) => {
  const isPc = useMediaQuery({
    query: "(min-width:768px) ",
  });
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

const Spacing = ({ mobile, pc }: { mobile: number; pc: number }) => {
  return (
    <>
      <PC>
        <BaseSpacing size={pc} />
      </PC>
      <Mobile>
        <BaseSpacing size={mobile} />
      </Mobile>
    </>
  );
};

const Padding = ({
  mobile,
  pc,
  children,
  ...rest
}: PaddingProps & { mobile: PaddingSize; pc: PaddingSize }) => {
  return (
    <>
      <PC>
        <BasePadding size={pc} {...rest}>
          {children}
        </BasePadding>
      </PC>
      <Mobile>
        <BasePadding size={mobile} {...rest}>
          {children}
        </BasePadding>
      </Mobile>
    </>
  );
};

const Txt = ({
  mobile,
  pc,
  children,
  ...rest
}: Omit<TextProps, "typo"> & {
  mobile: keyof typeof typo;
  pc: keyof typeof typo;
}) => {
  return (
    <>
      <PC>
        <BaseTxt typo={pc} {...rest}>
          {children}
        </BaseTxt>
      </PC>
      <Mobile>
        <BaseTxt typo={mobile} {...rest}>
          {children}
        </BaseTxt>
      </Mobile>
    </>
  );
};

export default { Mobile, PC, Spacing, Padding, Txt };
