import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
