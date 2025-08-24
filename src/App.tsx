import { type ReactElement } from 'react';
import styles from '@scss/app.module.scss';
import classNames from 'classnames/bind';
import { Outlet } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Sidenav from './components/Sidenav';
import ThemeProvider from './context/ThemeProvider';

const cx = classNames.bind(styles);
const queryClient = new QueryClient();

const App = (): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <div className={cx('app-wrapper')}>
        <Sidenav />
        <main className={cx('app-wrapper__main')}>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
