import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode } from "react";
import { Padding } from "../layout/Padding";
import { createPortal } from "react-dom";

export interface ModalBoxProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: PositionType;
}
type PositionType = "center" | "top" | "bottom";

export const Modal = ({ open, onClose, children, ...props }: ModalBoxProps) => {
  return createPortal(
    <>
      {open && (
        <>
          <Dimmed onClick={onClose} />
          <ModalBox size={[24, 16]} {...props}>
            {children}
          </ModalBox>
        </>
      )}
    </>,
    document.body
  );
};

const ModalBox = styled(Padding)`
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
  position: fixed;
  top: 70px;
  left: 16px;
  width: calc(100% - 32px);

  z-index: 3;
`;

const Dimmed = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
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
