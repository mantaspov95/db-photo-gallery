import type { ReactElement } from 'react';
import styles from '@scss/app.module.scss';
import Sidenav from './components/Sidenav';
import ThemeProvider from './context/ThemeProvider';

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
