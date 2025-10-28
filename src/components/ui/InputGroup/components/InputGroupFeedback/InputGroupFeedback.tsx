import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames/bind';
import useInputGroup from '../../hooks/useInputGroup';
import styles from './InputGroupFeedback.module.scss';

const cx = classNames.bind(styles);

type InputGroupFeedbackProps = Omit<HTMLAttributes<HTMLSpanElement>, 'className' | 'role'> & PropsWithChildren;

const InputGroupFeedback = ({ children, ...restProps }: InputGroupFeedbackProps): ReactElement => {
  const { isError } = useInputGroup();

  return (
    <span
      {...restProps}
      className={cx('input-group-feedback', {
        'input-group-feedback--error': isError,
      })}
      role={isError ? 'alert' : undefined}
    >
      {children}
    </span>
  );
};

export default InputGroupFeedback;
