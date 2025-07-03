import type { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import type { ButtonVariant } from './Button.types';

const cx = classNames.bind(styles);

type CloseButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  className?: string;
} & PropsWithChildren &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'onClick' | 'type'>;

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  className,
  ...restProps
}: CloseButtonProps): ReactElement => (
  <button
    {...restProps}
    className={cx(
      'button',
      {
        [`button--${variant}`]: variant,
      },
      className
    )}
    type={type}
  >
    {children}
  </button>
);

export default Button;
