import { useState, useEffect, type PropsWithChildren, type ReactElement, useMemo } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }: PropsWithChildren): ReactElement {
  const initialTheme = localStorage.getItem('theme');
  const [darkMode, setDarkMode] = useState(initialTheme === 'dark');

  const toggleTheme = () => {
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    setDarkMode((mode) => !mode);
  };

  const contextValue = useMemo(() => ({ toggleTheme, darkMode }), [toggleTheme, darkMode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}
