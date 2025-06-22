import { type ReactElement } from 'react';
import styles from '@scss/app.module.scss';
import classNames from 'classnames/bind';
import { Outlet } from 'react-router';
import Sidenav from './components/Sidenav';
import ThemeProvider from './context/ThemeProvider';

const cx = classNames.bind(styles);

const App = (): ReactElement => (
  <ThemeProvider>
    <div className={cx('app-wrapper')}>
      <Sidenav />
      <main className={cx('app-wrapper__main')}>
        <Outlet />
      </main>
    </div>
  </ThemeProvider>
);

export default App;
