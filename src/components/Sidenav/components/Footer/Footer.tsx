import useTheme from '@hooks/useTheme';
import classNames from 'classnames/bind';
import { useState, type ReactElement } from 'react';
import styles from './Footer.module.scss';
import { getFooterOptions } from './Footer.logic';
import Modal from '@components/ui/Modal';

const cx = classNames.bind(styles);

const Footer = (): ReactElement => {
  const { toggleTheme, darkMode } = useTheme();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openNewsletterModal = () => {
    setIsOpenModal(true);
  };

  const footerOptions = getFooterOptions(darkMode, toggleTheme, openNewsletterModal);

  return (
    <div>
      <nav aria-label="Footer Navigation">
        <ul className={cx('footer')} role="menubar">
          {footerOptions.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name} aria-label={item.title} role="menuitem">
                <button type="button" title={item.title} onClick={item.onClick} className={cx('footer__item')}>
                  <Icon />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div>hello</div>
      </Modal>
    </div>
  );
};

export default Footer;
