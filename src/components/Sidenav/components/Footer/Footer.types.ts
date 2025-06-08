import type { MenuOptionsItem } from '../NavLinks/NavLinks.types';

export type FooterOptionsItem = Omit<MenuOptionsItem, 'pathName'> & {
  onClick: () => void;
};