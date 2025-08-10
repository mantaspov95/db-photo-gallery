import { useId, type ReactElement } from 'react';
import classNames from 'classnames/bind';
import { SKELETON_PICTURES_PER_PAGE } from './GallerySkeleton.constants';
import styles from './GallerySkeleton.module.scss';

const cx = classNames.bind(styles);

const skeletonArray = Array.from({ length: SKELETON_PICTURES_PER_PAGE });

const GallerySkeleton = (): ReactElement[] => {
  const elementId = useId();

  return skeletonArray.map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={`${elementId}-${index}`} className={cx('skeleton', 'gallery-skeleton')} />
  ));
};
export default GallerySkeleton;
