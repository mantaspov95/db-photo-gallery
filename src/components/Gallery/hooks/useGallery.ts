import { PICTURES_PER_PAGE } from '@constants/constants';
import { useSuspenseQuery, type UseSuspenseQueryResult } from '@tanstack/react-query';
import type { GalleryPictureApiItem } from '../Gallery.types';
import { getPhotosListApiUrl } from '../Gallery.logic';

export const useGetPhotosList = (
  page = 1,
  limit = PICTURES_PER_PAGE
): UseSuspenseQueryResult<GalleryPictureApiItem[], Error> => {
  const url = getPhotosListApiUrl(page, limit);

  return useSuspenseQuery({
    queryKey: ['gallery', 'photos', page, limit],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    },
  });
};
