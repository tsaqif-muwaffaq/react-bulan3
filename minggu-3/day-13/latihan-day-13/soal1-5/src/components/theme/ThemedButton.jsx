import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Ubah ke {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemedButton;
