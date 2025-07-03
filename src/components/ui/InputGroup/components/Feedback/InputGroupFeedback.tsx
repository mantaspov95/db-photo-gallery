import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames/bind';
import useInputGroup from '../../hooks/useInputGroup';
import styles from './InputGroupFeedback.module.scss';

const cx = classNames.bind(styles);

type InputGroupFeedbackProps = Omit<HTMLAttributes<HTMLSpanElement>, 'className' | 'role'> & PropsWithChildren;

const InputGroupFeedback = ({ children, ...restProps }: InputGroupFeedbackProps): ReactElement => {
  const { isError } = useInputGroup(); // TODO expand with isSuccess, isWarning and so on, or variant = name if needed
  return (
    <span
      {...restProps}
      className={cx('input-group-feedback', {
        'input-group-feedback--visible': isError, // TODO expand with function if any variant exists, in case its needed
        'input-group-feedback--error': isError,
      })}
      role={isError ? 'alert' : undefined} // TODO expand with function if any variant exists, in case its needed
    >
      {children}
    </span>
  );
};
export default InputGroupFeedback;
