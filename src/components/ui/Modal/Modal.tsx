import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';
import ModalContext from './context/ModalContext';
import ModalBody from './components/ModalBody';
import { closeModal, openModal } from './Modal.logic';
import type { ModalProps } from './Modal.types';

const cx = classNames.bind(styles);

// https://clhenrick.io/blog/react-a11y-modal-dialog/
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialog = dialogRef?.current;
  const contextValue = {
    close: () => {
      closeModal(dialog);
    },
  };

  // syncs the dialog's `open` property with React `isOpen` state
  useEffect(() => {
    if (!dialog) return;

    const handleBackdropClick = (event: Event) => {
      const { target } = event;
      if (target instanceof Element && target.nodeName === 'DIALOG') {
        closeModal(dialog);
      }
    };

    // when parent changes state to trigger native dialog functions
    if (isOpen) {
      openModal(dialog);
    } else {
      closeModal(dialog);
    }
    // outside(backdrop) click event listener
    dialog.addEventListener('click', handleBackdropClick);

    return () => {
      dialog.removeEventListener('click', handleBackdropClick);
      closeModal(dialog); // ensure modal is closed on cleanup
    };
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} onClose={onClose} className={cx('modal')} style={{ width: '100px' }}>
      <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
    </dialog>
  );
};

// assigning as subcomponent for clarity
Modal.Body = ModalBody;

export default Modal;
