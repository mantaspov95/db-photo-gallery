import { useEffect, type RefObject } from 'react';

type UseInfiniteScrollProps = {
  sentinelRef: RefObject<HTMLDivElement | null>;
  callback: () => void;
};

export const useInfiniteScroll = ({ sentinelRef, callback }: UseInfiniteScrollProps): void => {
  useEffect(() => {
    const sentinel = sentinelRef?.current;
    if (!sentinel) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback();
    });

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [callback]);
};
