import type { PropsWithChildren } from 'react';
import styles from './InputGroupLabel.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const InputGroupLabel = ({ children }: PropsWithChildren) => {
  return <label className={cx('input-group-label')}>{children}</label>;
};

export default InputGroupLabel;
