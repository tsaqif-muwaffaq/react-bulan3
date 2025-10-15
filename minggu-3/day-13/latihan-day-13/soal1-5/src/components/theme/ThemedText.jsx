import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const ThemedText = () => {
  const { theme } = useTheme();
  return (
    <p style={{ color: theme === "light" ? "#000" : "#000000ff" }}>
      🌗 Mode aktif: {theme}
    </p>
  );
};

export default ThemedText;
