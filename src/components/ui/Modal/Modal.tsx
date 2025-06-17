import classNames from 'classnames/bind';
import { useEffect, useRef, type PropsWithChildren, type SyntheticEvent } from 'react';
import styles from './Modal.module.scss';
import ModalCloseButton from './components/CloseButton';

const cx = classNames.bind(styles);

// https://clhenrick.io/blog/react-a11y-modal-dialog/
type ModalProps = PropsWithChildren & {
  isOpen: boolean;
  onClose?: (event?: SyntheticEvent) => void;
};

// prevents calling dialog.showModal() when it is already visible
const safelyOpenDialogAsModal = (dialog: HTMLDialogElement | null) => {
  if (dialog && !dialog.open) {
    dialog.showModal();
  }
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialog = dialogRef?.current;

  // syncs the dialog's `open` property with React `isOpen` state
  useEffect(() => {
    if (!dialog) return;

    const handleBackdropClick = (event: Event) => {
      const { target } = event;
      if (target instanceof Element && target.nodeName === 'DIALOG') {
        dialog.close();
      }
    };

    const cleanup = () => {
      dialog.removeEventListener('click', handleBackdropClick);
      dialog.close();
    };

    if (isOpen) {
      safelyOpenDialogAsModal(dialog);
    } else {
      dialog.close();
    }

    dialog.addEventListener('click', handleBackdropClick);

    return cleanup;
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} onClose={onClose} className={cx('modal')} style={{ width: '100px' }}>
      <ModalCloseButton onClose={() => dialog?.close()} />
      {children}
    </dialog>
  );
};

export default Modal;
