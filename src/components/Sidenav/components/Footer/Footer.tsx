import useTheme from '@hooks/useTheme';
import classNames from 'classnames/bind';
import { useState, type ReactElement } from 'react';
import NewsletterModal from '@components/NewsletterModal';
import Button from '@components/ui/Button';
import styles from './Footer.module.scss';
import { getFooterOptions } from './Footer.logic';

const cx = classNames.bind(styles);

const Footer = (): ReactElement => {
  const { toggleTheme, darkMode } = useTheme();
  const [isOpenNewsletterModal, setIsOpenNewsletterModal] = useState<boolean>(false);

  const openNewsletterModal = () => {
    setIsOpenNewsletterModal(true);
  };

  const footerOptions = getFooterOptions(darkMode, toggleTheme, openNewsletterModal);

  return (
    <>
      <footer>
        <nav aria-label="Footer">
          <ul className={cx('footer')} role="menubar">
            {footerOptions.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name} aria-label={item.title} role="menuitem">
                  <Button type="button" variant="footer" title={item.title} onClick={item.onClick}>
                    <Icon />
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
      </footer>
      <NewsletterModal isOpen={isOpenNewsletterModal} onClose={() => setIsOpenNewsletterModal(false)} />
    </>
  );
};

export default Footer;
