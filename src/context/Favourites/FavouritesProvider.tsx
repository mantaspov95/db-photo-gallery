import { useState, type PropsWithChildren, type ReactElement, useMemo, useCallback } from 'react';
import { type GalleryPictureApiItem } from '@hooks/useGallery.types';
import FavouritesContext from './FavouritesContext';
import { getInitialFavourites } from './Favourites.logic';
import { FAVOURITES_LOCALSTORAGE_NAME } from './Favourites.constants';

const FavouritesProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [favourites, setFavourites] = useState<GalleryPictureApiItem[]>(() => getInitialFavourites());

  const handleFavouritesChange = useCallback((apiItem: GalleryPictureApiItem) => {
    setFavourites((currentFavourites) => {
      const valueExists = currentFavourites.find((item) => item.id === apiItem.id);

      const newFavourites = valueExists
        ? currentFavourites.filter((item) => item.id !== apiItem.id)
        : [...currentFavourites, apiItem];

      localStorage.setItem(FAVOURITES_LOCALSTORAGE_NAME, JSON.stringify(newFavourites));

      return newFavourites;
    });
  }, []);

  const getIsFavourite = useCallback((id: string): boolean => favourites.some((item) => item.id === id), [favourites]);

  const contextValue = useMemo(
    () => ({ handleFavouritesChange, favourites, getIsFavourite }),
    [handleFavouritesChange, favourites, getIsFavourite]
  );

  return <FavouritesContext.Provider value={contextValue}>{children}</FavouritesContext.Provider>;
};

export default FavouritesProvider;
