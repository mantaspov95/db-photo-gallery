import { useState, useEffect, type PropsWithChildren } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const initialTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(initialTheme === "dark");

  const toggleTheme = () => {
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
