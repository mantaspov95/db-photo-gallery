import type { ReactElement } from 'react';
import Sidenav from './components/Sidenav/Sidenav';
import ThemeProvider from './context/ThemeProvider';

const App = (): ReactElement => (
  <ThemeProvider>
    <div style={{ width: '100vw' }}>
      <Sidenav />
      <main />
    </div>
    {/* placeholder for router? */}
  </ThemeProvider>
);

export default App;
