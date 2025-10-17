import { useSuspenseInfiniteQuery, type UseSuspenseInfiniteQueryResult } from '@tanstack/react-query';
import { PICTURES_PER_PAGE } from '@constants/shared.constants';
import { getPhotosListApiUrl } from '../components/GalleryHome/GalleryHome.logic';
import type { GalleryPictureApiResult } from './useGallery.types';

export const useGetPhotosList = (): UseSuspenseInfiniteQueryResult<GalleryPictureApiResult, Error> =>
  useSuspenseInfiniteQuery({
    queryKey: ['gallery', 'photos'],
    queryFn: async ({ pageParam }) => {
      const url = getPhotosListApiUrl(pageParam, PICTURES_PER_PAGE);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < PICTURES_PER_PAGE) {
        return undefined;
      }

      return allPages.length + 1;
    },
  });
