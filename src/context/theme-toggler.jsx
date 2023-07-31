import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const ThemeTogglerContext = createContext();

export const ThemeTogglerContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const context = {
    isDarkMode,
    setIsDarkMode,
  };
  return (
    <ThemeTogglerContext.Provider value={context}>
      {children}
    </ThemeTogglerContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeTogglerContext = () => useContext(ThemeTogglerContext);

ThemeTogglerContextProvider.propTypes = {
  children: PropTypes.node,
};
