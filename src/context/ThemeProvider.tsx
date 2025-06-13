import { useState, useEffect, type PropsWithChildren, type ReactElement, useMemo, useCallback } from 'react';
import { Theme } from '@constants/enums';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }: PropsWithChildren): ReactElement => {
  const initialTheme = localStorage.getItem('theme');
  const [darkMode, setDarkMode] = useState(initialTheme === Theme.DARK);

  const toggleTheme = useCallback(() => {
    localStorage.setItem('theme', darkMode ? Theme.LIGHT : Theme.DARK);
    setDarkMode((mode) => !mode);
  }, []);

  const contextValue = useMemo(() => ({ toggleTheme, darkMode }), [toggleTheme, darkMode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? Theme.DARK : Theme.LIGHT);
  }, [darkMode]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
