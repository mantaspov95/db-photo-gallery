import type { GalleryPictureApiItem } from '@hooks/useGallery.types';

export type FavouritesContextProps = {
  favourites: GalleryPictureApiItem[];
  handleFavouritesChange: (apiItem: GalleryPictureApiItem) => void;
  getIsFavourite: (id: string) => boolean;
};
