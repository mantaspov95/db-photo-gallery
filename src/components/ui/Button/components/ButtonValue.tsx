import type { PropsWithChildren, ReactNode } from 'react';
import CloseIcon from '@assets/icon-close.svg?react';
import FavouriteIcon from '@assets/icon-heart.svg?react';
import FavouriteIconFilled from '@assets/icon-heart-filled.svg?react';
import classNames from 'classnames/bind';
import type { ButtonVariant } from '../Button.types';
import styles from '../Button.module.scss';

const cx = classNames.bind(styles);

type ButtonValueProps = {
  variant?: ButtonVariant;
  isActive?: boolean;
} & PropsWithChildren;

const ButtonValue = ({ variant, isActive, children }: ButtonValueProps): ReactNode => {
  if (variant === 'close') return <CloseIcon className={cx('button__close-icon')} />;
  if (variant === 'favourite') {
    return isActive ? (
      <FavouriteIconFilled className={cx('button__favourite-icon')} />
    ) : (
      <FavouriteIcon className={cx('button__favourite-icon')} />
    );
  }

  return children;
};

export default ButtonValue;
