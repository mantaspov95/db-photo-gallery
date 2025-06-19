import CloseIcon from '@assets/icon-close.svg?react';
import classNames from 'classnames/bind';
import type { ButtonHTMLAttributes, ReactElement } from 'react';
import styles from './CloseButton.module.scss';

const cx = classNames.bind(styles);

type CloseButtonProps = {
  onClose: () => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'>;

const CloseButton = ({ onClose, ...buttonProps }: CloseButtonProps): ReactElement => (
  <button
    {...buttonProps}
    type="button"
    onClick={onClose}
    className={cx('close-button', buttonProps?.className)}
    title="close"
  >
    <CloseIcon />
  </button>
);
export default CloseButton;
