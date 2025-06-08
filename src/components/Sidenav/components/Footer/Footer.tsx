import useTheme from '@hooks/useTheme';
import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import styles from './Footer.module.scss';
import { getFooterOptions } from './Footer.logic';

const Footer = (): ReactElement => {
  const { toggleTheme, darkMode } = useTheme();
  const FOOTER_OPTIONS = getFooterOptions(darkMode, toggleTheme);

  const cx = classNames.bind(styles);
  return (
    <nav>
      <ul role="menubar" className={cx('footer')}>
        {FOOTER_OPTIONS.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.name} title={item.title}>
              <button
                type="button"
                role="menuitem"
                onClick={item?.onClick}
                value={item.name}
                className={cx('footer__item')}
              >
                <Icon />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Footer;
