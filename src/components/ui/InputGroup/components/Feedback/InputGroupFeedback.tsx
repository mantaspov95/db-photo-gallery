import type { HTMLAttributes, PropsWithChildren } from 'react';
import useInputGroup from '../../hooks/useInputGroup';
import styles from './InputGroupFeedback.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type InputGroupFeedbackProps = Omit<HTMLAttributes<HTMLSpanElement>, 'className' | 'role'> & PropsWithChildren; // i prefer excluding role from props because it could be handled by function internally
const InputGroupFeedback = ({ children, ...restProps }: InputGroupFeedbackProps) => {
  const { isError } = useInputGroup(); // can expand with isSuccess, isWarning and so on, or variant = name if needed
  return (
    <span
      {...restProps}
      className={cx('input-group-feedback', {
        'input-group-feedback--visible': isError, // can expand with function if any variant exists, in case its needed
        'input-group-feedback--error': isError,
      })}
      role={isError ? 'alert' : undefined} // can expand with function if any variant exists, in case its needed
    >
      {children}
    </span>
  );
};
export default InputGroupFeedback;
