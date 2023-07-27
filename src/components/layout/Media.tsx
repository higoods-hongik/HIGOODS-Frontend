import { ComponentProps } from "react";
import { useMediaQuery } from "react-responsive";
import { Spacing as BaseSpacing } from "./Spacing";
import { Padding as BasePadding, PaddingProps, PaddingSize } from "./Padding";

const Mobile = ({ children, ...rest }: ComponentProps<"div">) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return <div {...rest}>{isMobile && children}</div>;
};

const PC = ({ children, ...rest }: ComponentProps<"div">) => {
  const isPc = useMediaQuery({
    query: "(min-width:768px) ",
  });
  return <div {...rest}>{isPc && children}</div>;
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

export default { Mobile, PC, Spacing, Padding };
