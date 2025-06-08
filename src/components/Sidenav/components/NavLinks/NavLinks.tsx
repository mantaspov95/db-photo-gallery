import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router';
import type { ReactElement } from 'react';
import { MENU_OPTIONS } from './NavLinks.constants';
import styles from './NavLinks.module.scss';

const cx = classNames.bind(styles);

// to split to separate component
const NavLinks = (): ReactElement => {
  const activeOption = useLocation();
  return (
    <nav className={cx('navlinks')}>
      <ul role="menubar">
        {MENU_OPTIONS.map((item) => {
          const Icon = item.icon;
          const isActive = activeOption.pathname === `/${item.pathName}`;
          return (
            <li key={item.name} title={item.title}>
              <Link
                to={item.pathName}
                role="menuitem"
                aria-current={isActive && 'page'}
                className={`${cx('navlinks__item', {
                  'navlinks__item--active': isActive,
                })}`}
              >
                <Icon />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
