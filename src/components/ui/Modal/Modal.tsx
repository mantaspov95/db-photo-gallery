import classNames from 'classnames/bind';
import { useEffect, useMemo, useRef, type ReactElement } from 'react';
import styles from './Modal.module.scss';
import ModalContext from './context/ModalContext';
import ModalBody from './components/ModalBody';
import { closeModal, openModal } from './Modal.logic';
import type { ModalProps } from './Modal.types';

const cx = classNames.bind(styles);

// https://clhenrick.io/blog/react-a11y-modal-dialog/
const Modal = ({ isOpen, onClose, children, ...props }: ModalProps): ReactElement => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialog = dialogRef?.current;
  const contextValue = useMemo(
    () => ({
      close: () => {
        closeModal(dialog);
      },
    }),
    [dialog]
  );
  // syncs the dialog's `open` property with React `isOpen` state
  useEffect(() => {
    if (!dialog) return undefined;

    // https://stackoverflow.com/a/26984690
    const handleBackdropClick = (event: MouseEvent) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        closeModal(dialog);
      }
    };

    // when parent changes state to trigger native dialog functions
    if (isOpen) {
      openModal(dialog);
    } else {
      closeModal(dialog);
    }
    // mousedown instead of click to prevent enter keyboard press to act as click
    // outside(backdrop) mousedown event listener
    dialog.addEventListener('mousedown', handleBackdropClick);

    return () => {
      dialog.removeEventListener('mousedown', handleBackdropClick);
      closeModal(dialog); // ensure modal is closed on cleanup
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

// assigning as subcomponent for clarity
Modal.Body = ModalBody;

export default Modal;
