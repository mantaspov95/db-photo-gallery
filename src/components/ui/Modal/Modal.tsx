import classNames from 'classnames/bind';
import { useEffect, useRef, type PropsWithChildren, type SyntheticEvent } from 'react';
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles)

// https://clhenrick.io/blog/react-a11y-modal-dialog/
type ModalProps = PropsWithChildren & {
  isOpen: boolean;
  onClose?: (event?: SyntheticEvent) => void;
};

/** prevents calling dialog.showModal() when it is already visible, as doing so will throw an error */
const safelyOpenDialogAsModal = (dialog: HTMLDialogElement | null) => {
  if (dialog && !dialog.open) {
    dialog.showModal();
  }
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // syncs the dialog's `open` property with React `isOpen` state
  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen) {
      safelyOpenDialogAsModal(dialog);
    } else {
      dialog?.close();
    }

    // make sure to close the dialog on unmount
    return () => {
      dialog?.close();
    };
  }, [isOpen]);

  return (
      <dialog ref={dialogRef} onClose={onClose} className={cx('modal')}>
        {children}
      </dialog>
  );
};

export default Modal;
