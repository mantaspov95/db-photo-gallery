import classNames from 'classnames/bind';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackButton from '@components/ui/ErrorFallbackButton';
import { Suspense, type PropsWithChildren, type ReactElement } from 'react';
import GallerySkeleton from './components/GallerySkeleton';
import styles from './Gallery.module.scss';
import GalleryHome from './components/GalleryHome/GalleryHome';

const cx = classNames.bind(styles);

const renderErrorFallback = ({ resetErrorBoundary }: { resetErrorBoundary: () => void }): ReactElement => (
  <ErrorFallbackButton onClick={resetErrorBoundary} />
);

const Gallery = ({ children }: PropsWithChildren): ReactElement => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary onReset={reset} fallbackRender={renderErrorFallback}>
        <Suspense fallback={<GallerySkeleton />}>
          <div className={cx('gallery')}>{children}</div>
        </Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

Gallery.Home = GalleryHome;
// TODO Gallery.Favourites = GalleryFavourites

export default Gallery;
