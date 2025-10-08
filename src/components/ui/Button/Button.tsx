import type { ButtonHTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames/bind';
import CloseIcon from '@assets/icon-close.svg?react';
import styles from './Button.module.scss';
import type { ButtonVariant } from './Button.types';

const cx = classNames.bind(styles);

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'type'>;

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  className,
  ...restProps
}: ButtonProps): ReactElement => (
  <button {...restProps} className={cx('button', `button--${variant}`, className)} type={type}>
    {variant === 'close' && !children && <CloseIcon className={cx('button__close-icon')} />}
    {children}
  </button>
);

export default Button;
