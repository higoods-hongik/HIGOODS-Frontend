import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode, useState } from "react";
import { Padding } from "../layout/Padding";
import { createPortal } from "react-dom";
import { match } from "ts-pattern";
import { css } from "@emotion/react";
import { media } from "~/styles/theme";

export interface ModalBoxProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
  children: ReactNode;
  position?: PositionType;
  height?: number;
}
type PositionType = "center" | "top" | "bottom";

export const Modal = ({
  open,
  onClose,
  children,
  position = "center",
  height,
  ...props
}: ModalBoxProps) => {
  const [unControlledState, setUnControlledState] = useState(true);

  if (open != null) {
    return createPortal(
      <>
        {open && (
          <>
            <Dimmed onClick={onClose} />
            <ModalBox
              size={[24, 16]}
              position={position}
              height={height}
              {...props}
            >
              {children}
            </ModalBox>
          </>
        )}
      </>,
      document.body
    );
  } else {
    return createPortal(
      <>
        {unControlledState && (
          <>
            <Dimmed onClick={() => setUnControlledState(false)} />
            <ModalBox
              size={[24, 16]}
              position={position}
              height={height}
              {...props}
            >
              {children}
            </ModalBox>
          </>
        )}
      </>,
      document.body
    );
  }
};

const ModalBox = styled(Padding)<{ position: PositionType; height?: number }>`
  @keyframes grow {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  background-color: ${({ theme }) => theme.palette.white};
  animation: 0.1s forwards grow cubic-bezier(0.465, 0.183, 0.153, 0.946);
  border: 1px solid black;
  z-index: 3;

  ${media.mobile} {
    width: calc(100% - 32px);
    position: fixed;
    left: 16px;
    ${({ position, height }) =>
      match(position)
        .with("top", () => css({ top: 70 }))
        .with("bottom", () => css({ bottom: 70 }))
        .with("center", () =>
          css({
            top: `calc(50% - ${(height ?? 343) / 2}px)`,
          })
        )
        .exhaustive()};
  }

  ${media.pc} {
    position: absolute;
    width: 480px;
    ${({ height }) =>
      css({
        top: `calc(50% - ${(height ?? 343) / 2}px)`,
      })}
    left: calc(50% - 240px);
  }
`;

const Dimmed = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  ${media.mobile} {
    z-index: 1;
  }
  ${media.pc} {
    z-index: 3;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.6;
    }
  }
  animation: 0.1s forwards fadeIn ease-out;
  background-color: rgba(0, 0, 0, 0.6);
`;
