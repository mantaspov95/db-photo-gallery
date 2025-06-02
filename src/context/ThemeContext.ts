import { createContext } from 'react';
import type { ThemeContextType } from './themeTypes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export default ThemeContext;
