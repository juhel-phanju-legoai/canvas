import React, { HTMLAttributes } from "react";

import "./Modal.css";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

interface IProps extends HTMLAttributes<HTMLDivElement>{
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({open, onClose, children, ...props}: IProps) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  // useOnClickOutside(modalRef, onClose);

  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 whole-screen z50" {...props}>
          <div className="center-window" ref={modalRef}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;