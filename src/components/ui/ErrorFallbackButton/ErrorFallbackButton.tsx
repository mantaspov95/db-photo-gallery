import ErrorLogo from '@assets/sad-cloud.svg?react';
import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import styles from './ErrorFallbackButton.module.scss';

const cx = classNames.bind(styles);

type ErrorFallbackButtonProps = {
  onClick: () => void;
  title?: string;
  heading?: string;
  description?: string;
};

const ErrorFallbackButton = ({
  onClick,
  heading = 'Something Went Wrong',
  description = 'Click to try again',
  title = 'Error! Try again',
}: ErrorFallbackButtonProps): ReactElement => (
  <button type="button" onClick={onClick} title={title} aria-label={title} className={cx('error-fallback-button')}>
    <ErrorLogo className={cx('error-fallback-button__logo')} />
    <span className={cx('error-fallback-button__heading')}>{heading}</span>
    <span>{description}</span>
  </button>
);

export default ErrorFallbackButton;
