import { Suspense, useCallback, useMemo, useRef, type ReactElement } from 'react';
import { useGetPhotosList } from '@hooks/useGallery';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallbackButton from '@components/ui/ErrorFallbackButton';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import styles from './GalleryHome.module.scss';
import GallerySkeleton from '../GallerySkeleton';
import GalleryPicture from '../GalleryPicture';

const cx = classNames.bind(styles);

const GalleryHomeContent = (): ReactElement | null => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetPhotosList();

  const handleFetchNextPage = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useInfiniteScroll({
    sentinelRef,
    callback: handleFetchNextPage,
  });

  const photos = useMemo(() => data?.pages.flat() ?? [], [data?.pages]);

  return (
    <>
      {photos.map((item) => (
        <GalleryPicture key={item.id} apiItem={item} />
      ))}
      {isFetchingNextPage ? <GallerySkeleton /> : <div ref={sentinelRef} />}
    </>
  );
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
