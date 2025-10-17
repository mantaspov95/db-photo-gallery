import { type ReactElement } from 'react';
import classNames from 'classnames/bind';
import { Outlet } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styles from './scss/app.module.scss';
import Sidenav from './components/Sidenav';
import ThemeProvider from './context/Theme/ThemeProvider';
import FavouritesProvider from '@context/Favourites/FavouritesProvider';

const cx = classNames.bind(styles);
const queryClient = new QueryClient();

const App = (): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <FavouritesProvider>
        <div className={cx('app-wrapper')}>
          <Sidenav />
          <main className={cx('app-wrapper__main')}>
            <Outlet />
          </main>
        </div>
      </FavouritesProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
