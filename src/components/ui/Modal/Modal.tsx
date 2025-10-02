import classNames from 'classnames/bind';
import { useEffect, useMemo, useRef, type ReactElement } from 'react';
import styles from './Modal.module.scss';
import ModalContext from './context/ModalContext';
import ModalBody from './components/ModalBody';
import { closeModal, openModal } from './Modal.logic';
import type { ModalProps } from './Modal.types';

const cx = classNames.bind(styles);

const Modal = ({ isOpen, onClose, children, ...props }: ModalProps): ReactElement => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const contextValue = useMemo(() => {
    const dialog = dialogRef?.current;

    return {
      close: () => {
        closeModal(dialog);
      },
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef?.current;

    if (!dialog) return undefined;

    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target === dialog) {
        closeModal(dialog);
      }
    };

    const handleFocusFirstElement = () => {
      const focusableElements = dialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      if (firstElement instanceof HTMLElement) {
        firstElement.focus();
      }
    };

    if (isOpen) {
      openModal(dialog);
      handleFocusFirstElement();
    } else {
      closeModal(dialog);
    }

    dialog.addEventListener('mousedown', handleBackdropClick);

    return () => {
      dialog.removeEventListener('mousedown', handleBackdropClick);
      closeModal(dialog);
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className={cx('modal')}
      aria-labelledby={props['aria-labelledby']}
      aria-label={props['aria-label']}
      aria-describedby={props['aria-describedby']}
    >
      <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
    </dialog>
  );
};

Modal.Body = ModalBody;

export default Modal;
