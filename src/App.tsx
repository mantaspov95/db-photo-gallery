import { type ReactElement } from 'react';
import styles from '@scss/app.module.scss';
import classNames from 'classnames/bind';
import Sidenav from './components/Sidenav';
import ThemeProvider from './context/ThemeProvider';

const cx = classNames.bind(styles);

const App = (): ReactElement => (
  <ThemeProvider>
    <div className={cx('app-wrapper')}>
      <Sidenav />
      <main />
    </div>
    {/* TODO: placeholder for router? */}
  </ThemeProvider>
);

export default App;
