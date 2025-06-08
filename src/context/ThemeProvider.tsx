import { useState, useEffect, type PropsWithChildren, type ReactElement, useMemo, useCallback } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }: PropsWithChildren): ReactElement => {
  const initialTheme = localStorage.getItem('theme');
  const [darkMode, setDarkMode] = useState(initialTheme === 'dark');

  const toggleTheme = useCallback(() => {
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    setDarkMode((mode) => !mode);
  }, []);

  const contextValue = useMemo(() => ({ toggleTheme, darkMode }), [toggleTheme, darkMode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
