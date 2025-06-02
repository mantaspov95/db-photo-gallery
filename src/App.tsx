import type { ReactNode } from 'react';
import Sidenav from './components/Sidenav/Sidenav';
import ThemeProvider from './context/ThemeProvider';

function App(): ReactNode {
  return (
    <ThemeProvider>
      <Sidenav />
      <main />
      {/* placeholder for router? */}
    </ThemeProvider>
  );
}

export default App;
