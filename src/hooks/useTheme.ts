import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import type { ThemeContextType } from '../context/themeTypes';

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme can only be used inside a ThemeProvider');
  }

  return context;
};

export default useTheme;
