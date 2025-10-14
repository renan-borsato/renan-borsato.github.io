import { useEffect, useMemo, useState } from "react";
import "./ThemeSwitcher.css";
import PropTypes from "prop-types";

const ThemeSwitcher = ({ darkClassName }) => {
  // Check the user's preferred color scheme
  const prefersDarkMode = useMemo(() => {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  // Apply the selected theme (dark or light) when the component mounts or changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);
    } else {
      document.body.classList.remove(darkClassName);
    }
  }, [isDarkMode, darkClassName]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div>
      <button
        data-testid="themeSwitcherButton"
        className="btn"
        onClick={toggleTheme}
      >
        {isDarkMode ? "To Light Mode" : "To Dark Mode"}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
  darkClassName: "dark",
};

export default ThemeSwitcher;
