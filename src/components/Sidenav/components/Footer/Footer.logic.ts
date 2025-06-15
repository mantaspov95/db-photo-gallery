import NewsletterLogo from '@assets/icon-mail.svg?react';
import LightModeLogo from '@assets/icon-light-mode.svg?react';
import DarkModeLogo from '@assets/icon-dark-mode.svg?react';
import type { FooterOptionsItem } from './Footer.types';

export const getFooterOptions = (darkMode: boolean, toggleTheme: () => void): FooterOptionsItem[] => [
  {
    name: 'newsletter',
    title: 'Subscribe to Newsletter',
    icon: NewsletterLogo,
    onClick: () => {}, // TODO: placeholder for newsletter callback or setIsModalOpen
  },
  {
    name: 'change-theme',
    title: `Switch to ${darkMode ? ' light' : 'dark'} mode`,
    icon: darkMode ? LightModeLogo : DarkModeLogo,
    onClick: () => toggleTheme(),
  },
];
