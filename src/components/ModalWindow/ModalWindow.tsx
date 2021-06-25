import { useRef, useEffect, FC, ReactElement, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { IModalWindow } from "../../types";
import './index.scss';


let modalRoot = document.getElementById('modal-root');

if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
};

const ModalWindow: FC<IModalWindow> = ({ children, onClose }): ReactElement => {
  const elRef = useRef<any>(null);

  if (!elRef.current) elRef.current = document.createElement('div');

  const onKeyDownClose = useCallback((e) => {
    if (e.keyCode === 27) {
      e.preventDefault();
      onClose();
    }
  },[onClose]);

  useEffect(() => {
    modalRoot?.appendChild(elRef.current);
    return () => modalRoot?.removeChild(elRef.current);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', (e) => onKeyDownClose(e));
    return () => document.removeEventListener('keydown', (e) => onKeyDownClose(e));
  }, [onKeyDownClose]);

  return createPortal(
    <div className="modal">
      {children}
    </div>,
    elRef.current,
  );
};

export default ModalWindow;
