import NewsletterLogo from '@assets/icon-mail.svg?react';
import LightModeLogo from '@assets/icon-light-mode.svg?react';
import DarkModeLogo from '@assets/icon-dark-mode.svg?react';
import { Theme } from '@constants/enums';
import type { FooterOptionsItem } from './Footer.types';

export const getFooterOptions = (
  darkMode: boolean,
  toggleTheme: () => void,
  openNewsletterModal: () => void
): FooterOptionsItem[] => [
  {
    name: 'newsletter',
    title: 'Subscribe to Newsletter',
    icon: NewsletterLogo,
    onClick: () => openNewsletterModal(),
    // TODO: placeholder for newsletter callback or setIsModalOpen
  },
  {
    name: 'change-theme',
    title: `Switch to ${darkMode ? Theme.LIGHT : Theme.DARK} mode`,
    icon: darkMode ? LightModeLogo : DarkModeLogo,
    onClick: () => toggleTheme(),
  },
];
