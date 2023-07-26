import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

type ChildrenType = { children: ReactNode };

const Mobile = ({ children }: ChildrenType) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const PC = ({ children }: ChildrenType) => {
  const isPc = useMediaQuery({
    query: "(min-width:768px) ",
  });
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export default { Mobile, PC };
