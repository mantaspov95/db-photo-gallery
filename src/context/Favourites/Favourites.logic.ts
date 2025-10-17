import { FAVOURITES_LOCALSTORAGE_NAME } from './Favourites.constants';

export const getInitialFavourites = () => {
  const favouritesLocalStorage = localStorage.getItem(FAVOURITES_LOCALSTORAGE_NAME);
  const initialFavourites = favouritesLocalStorage
    ? favouritesLocalStorage
        .split(',')
        .map(Number)
        .filter((n) => !isNaN(n)) // to make sure if user modifies localstorage manually to not cause crash of logic
    : [];

  return initialFavourites;
};