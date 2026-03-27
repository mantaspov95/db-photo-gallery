import type { GalleryPictureApiItem } from '@hooks/useGallery.types';
import { FAVOURITES_LOCALSTORAGE_NAME } from './Favourites.constants';

export const getInitialFavourites = (): GalleryPictureApiItem[] => {
  const favouritesLocalStorage = localStorage.getItem(FAVOURITES_LOCALSTORAGE_NAME);
  try {
    return favouritesLocalStorage ? JSON.parse(favouritesLocalStorage) : [];
  } catch (error) {
    return [];
  }
};
