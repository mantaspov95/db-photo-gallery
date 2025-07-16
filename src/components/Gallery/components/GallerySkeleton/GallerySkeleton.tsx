import SkeletonContainer from '@components/ui/SkeletonContainer';
import classNames from 'classnames/bind';
import React, { useId, type ReactElement } from 'react';
import styles from '../../Gallery.module.scss';
import { PICTURES_PER_PAGE } from '@components/Gallery/Gallery.constants';

const cx = classNames.bind(styles);
const arrayLength = PICTURES_PER_PAGE / 2;
const skeletonArray = Array.from({ length: arrayLength });

const GallerySkeleton = (): ReactElement => {
  return (
    <div className={cx('gallery')}>
      {skeletonArray.map(() => {
        const elementId = useId();
        return (
          <React.Fragment key={elementId}>
            <SkeletonContainer width={270} height={340} />
            <SkeletonContainer width={270} height={180} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default GallerySkeleton;
