import type { ButtonHTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import type { ButtonVariant } from './Button.types';
import ButtonValue from './components/ButtonValue';
import { getButtonFavouriteTitle } from './Button.logic';

const cx = classNames.bind(styles);

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  isActive?: boolean;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'type'>;

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  isActive,
  className,
  ...restProps
}: ButtonProps): ReactElement => {
  const favouriteTitle = variant === 'favourite' ? getButtonFavouriteTitle(!!isActive) : undefined;

  return (
    <button
      {...restProps}
      className={cx('button', `button--${variant}`, { active: isActive }, className)}
      type={type}
      title={restProps.title || favouriteTitle}
    >
      <ButtonValue variant={variant} isActive={isActive}>
        {children}
      </ButtonValue>
    </button>
  );
};

export default Button;
