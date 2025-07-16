import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import styles from './SkeletonContainer.module.scss';

const cx = classNames.bind(styles);

type SkeletonContainerProps = {
  width?: number;
  height?: number;
  borderRadius?: string;
  className?: string;
};

const SkeletonContainer = ({ width, height, borderRadius, className }: SkeletonContainerProps): ReactElement => (
  <div className={cx('skeleton', className)} style={{ width, height, borderRadius }} />
);
export default SkeletonContainer;
