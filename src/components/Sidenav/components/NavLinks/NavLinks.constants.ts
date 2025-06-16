import HomeLogo from '@assets/icon-default.svg?react';
import FavouritesLogo from '@assets/icon-heart.svg?react';
import type { MenuOptionsItem } from './NavLinks.types';

export const MENU_OPTIONS: MenuOptionsItem[] = [
  {
    name: 'home',
    pathName: '',
    title: 'Home',
    icon: HomeLogo,
  },
  {
    name: 'favourites',
    pathName: 'favourites',
    title: 'My Favourites',
    icon: FavouritesLogo,
  },
];
