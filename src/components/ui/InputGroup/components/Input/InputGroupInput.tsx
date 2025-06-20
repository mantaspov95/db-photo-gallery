import classNames from 'classnames/bind';
import styles from './InputGroupInput.module.scss';
import type { InputHTMLAttributes } from 'react';
import useInputGroup from '../../hooks/useInputGroup';

const cx = classNames.bind(styles);
type InputGroupInput = InputHTMLAttributes<HTMLInputElement>;
const InputGroupInput = ({ ...restProps }: InputGroupInput) => {
  const { isError } = useInputGroup();
  return (
    <input
      className={cx('input-group-input', {
        'input-group-input--error': isError,
      })}
      {...restProps}
    />
  );
};

export default InputGroupInput;
