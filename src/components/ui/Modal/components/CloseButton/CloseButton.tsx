import CloseIcon from '@assets/icon-close.svg?react';
import styles from './CloseButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type CloseButtonProps = {
  onClose: () => void;
};
const ModalCloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <button  onClick={onClose} className={cx('modal-close-button')}>
      <CloseIcon />
    </button>
  );
};
export default ModalCloseButton;
