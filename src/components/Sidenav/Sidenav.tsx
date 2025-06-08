import { type ReactElement } from 'react';
import Logo from '@assets/logo-small.svg?react';
import classNames from 'classnames/bind';
import styles from './Sidenav.module.scss';
import NavLinks from './components/NavLinks';
import Footer from './components/Footer';

const cx = classNames.bind(styles);

const Sidenav = (): ReactElement => (
  <aside className={cx('sidenav')}>
    <Logo />
    <NavLinks />
    <Footer />
  </aside>
);

export default Sidenav;
