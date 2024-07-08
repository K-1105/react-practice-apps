import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from '@mui/material/Button';

interface ModalProps {
  children: React.ReactNode;
  buttonCaption: string;
}

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
    close() {
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    console.error('Modal root element not found');
    return null;
  }

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button type="submit">{buttonCaption}</Button>
      </form>
    </dialog>,
    modalRoot
  );
});

export default Modal;
