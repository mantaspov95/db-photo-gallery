import { useContext } from 'react';

import type { FavouritesContextProps } from '@context/Favourites/Favourites.types';
import FavouritesContext from '@context/Favourites/FavouritesContext';

const useFavourites = (): FavouritesContextProps => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites can only be used inside a FavouritesProvider');
  }

  return context;
};

export default useFavourites;
