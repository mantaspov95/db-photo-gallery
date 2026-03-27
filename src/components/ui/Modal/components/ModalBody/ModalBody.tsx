import type { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './ModalBody.module.scss';

const cx = classNames.bind(styles);

type ModalBodyProps = {
  className?: string;
} & PropsWithChildren;

const ModalBody = ({ className, children }: ModalBodyProps): ReactElement => (
  <div className={cx('modal-body', className)}>{children}</div>
);

export default ModalBody;
