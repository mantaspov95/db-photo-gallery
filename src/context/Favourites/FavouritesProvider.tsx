import { useState, type PropsWithChildren, type ReactElement, useMemo, useCallback } from 'react';
import FavouritesContext from './FavouritesContext';
import { getInitialFavourites } from './Favourites.logic';
import { FAVOURITES_LOCALSTORAGE_NAME } from './Favourites.constants';

const FavouritesProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [favourites, setFavourites] = useState(() => getInitialFavourites());

  const handleFavouritesChange = useCallback((id: number) => {
    setFavourites((currentFavourites) => {
      const newFavourites = currentFavourites.includes(id)
        ? currentFavourites.filter((num) => num !== id)
        : [...currentFavourites, id];

      localStorage.setItem(FAVOURITES_LOCALSTORAGE_NAME, newFavourites.join(','));

      return newFavourites;
    });
  }, []);

  const contextValue = useMemo(() => ({ handleFavouritesChange, favourites }), [handleFavouritesChange, favourites]);

  return <FavouritesContext.Provider value={contextValue}>{children}</FavouritesContext.Provider>;
};

export default FavouritesProvider;
