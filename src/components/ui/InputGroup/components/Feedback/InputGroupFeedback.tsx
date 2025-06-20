import type { PropsWithChildren } from 'react';
import useInputGroup from '../../hooks/useInputGroup';
import styles from './InputGroupFeedback.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const InputGroupFeedback = ({ children }: PropsWithChildren) => {
  const { isError } = useInputGroup();
  return (
    <span
      className={cx('input-group-feedback', {
        'input-group-feedback--visible': isError, // can expand with function if any variant exists, in case its needed
        'input-group-feedback--error': isError,
      })}
    >
      {children}
    </span>
  );
};
export default InputGroupFeedback;
