import type { LabelHTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './InputGroupLabel.module.scss';

const cx = classNames.bind(styles);

type InputGroupLabelProps = LabelHTMLAttributes<HTMLLabelElement> & PropsWithChildren;

const InputGroupLabel = ({ htmlFor, children, ...restProps }: InputGroupLabelProps): ReactElement => (
  <label {...restProps} className={cx('input-group-label', restProps?.className)} htmlFor={htmlFor}>
    {children}
  </label>
);

export default InputGroupLabel;
