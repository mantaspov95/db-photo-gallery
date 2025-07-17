import classNames from 'classnames/bind';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { Suspense, type PropsWithChildren, type ReactElement } from 'react';
import GallerySkeleton from './components/GallerySkeleton';
import styles from './Gallery.module.scss';
import GalleryHome from './components/GalleryHome/GalleryHome';
import ErrorBoundaryWrapper from '@components/ErrorBoundaryWrapper/ErrorBoundaryWrapper';

const cx = classNames.bind(styles);

const Gallery = ({ children }: PropsWithChildren): ReactElement => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundaryWrapper reset={reset}>
        <Suspense fallback={<GallerySkeleton />}>
          <div className={cx('gallery')}>{children}</div>
        </Suspense>
      </ErrorBoundaryWrapper>
    )}
  </QueryErrorResetBoundary>
);

Gallery.Home = GalleryHome;
// TODO Gallery.Favourites = GalleryFavourites

export default Gallery;
