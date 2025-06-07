import type { ReactElement } from 'react';
import Sidenav from './components/Sidenav/Sidenav';
import ThemeProvider from './context/ThemeProvider';
import styles from '@scss/app.module.scss';

const App = (): ReactElement => (
  <ThemeProvider>
    <div className={`${styles['app-wrapper']}`}>
      <Sidenav />
      <main />
    </div>
    {/* placeholder for router? */}
  </ThemeProvider>
);

export default App;
