import type {  LabelHTMLAttributes, PropsWithChildren } from 'react';
import styles from './InputGroupLabel.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
type InputGroupLabelProps = LabelHTMLAttributes<HTMLLabelElement> & PropsWithChildren;
const InputGroupLabel = ({ children, ...restProps }: InputGroupLabelProps) => {
  return (
    <label {...restProps} className={cx('input-group-label', restProps?.className)}>
      {children}
    </label>
  );
};

export default InputGroupLabel;
