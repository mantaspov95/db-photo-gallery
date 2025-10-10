import { Suspense, type ReactElement } from 'react';
import { useGetPhotosList } from '@hooks/useGallery';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackButton from '@components/ui/ErrorFallbackButton';
import styles from './GalleryHome.module.scss';
import GallerySkeleton from '../GallerySkeleton';
import GalleryPicture from '../GalleryPicture';

const cx = classNames.bind(styles);

const GalleryHomeContent = (): ReactElement | null => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetPhotosList();
  return data && data.pages.length > 0 ? (
    <>
      {data.pages.flat().map((item) => (
        <GalleryPicture key={item.id} apiItem={item} />
      ))}
      {isFetchingNextPage && 
      <GallerySkeleton />}
      <button onClick={() => fetchNextPage()}>next page</button>
    </>
  ) : null;
};

const GalleryHome = (): ReactElement => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary fallback={<ErrorFallbackButton onClick={reset} />}>
        <div className={cx('gallery-home')}>
          <Suspense fallback={<GallerySkeleton />}>
            <GalleryHomeContent />
          </Suspense>
        </div>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

export default GalleryHome;
