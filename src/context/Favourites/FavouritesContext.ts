import { createContext } from 'react';
import type { FavouritesContextProps } from './Favourites.types';

const FavouritesContext = createContext<FavouritesContextProps | undefined>(undefined);

export default FavouritesContext;
