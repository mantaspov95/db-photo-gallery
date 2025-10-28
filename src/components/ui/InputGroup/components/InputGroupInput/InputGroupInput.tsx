import classNames from 'classnames/bind';
import type { InputHTMLAttributes, ReactElement } from 'react';
import styles from './InputGroupInput.module.scss';
import useInputGroup from '../../hooks/useInputGroup';

const cx = classNames.bind(styles);

type InputGroupInputProps = InputHTMLAttributes<HTMLInputElement>;

const InputGroupInput = ({ ...restProps }: InputGroupInputProps): ReactElement => {
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
