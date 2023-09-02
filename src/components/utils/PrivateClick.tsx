import { Children, ReactElement, cloneElement, useState } from "react";
import { KakaoLogin } from "../modal/modals/KakaoLogin";

export const PrivateClick = ({ children }: { children: ReactElement }) => {
  const child = Children.only(children);
  const [open, setOpen] = useState(false);
  const authed = true;

  const onDefaultClick = () => {
    if (child.props && typeof child.props["onClick"] === "function") {
      return child.props["onClick"]();
    }
  };

  const onPrivateClick = () => {
    if (authed) {
      onDefaultClick();
    } else {
      console.log("adsf");
      setOpen(true);
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <KakaoLogin open={open} onClose={() => setOpen(false)} />
      {cloneElement(children as React.ReactElement, {
        onClick: onPrivateClick,
      })}
    </div>
  );
};
