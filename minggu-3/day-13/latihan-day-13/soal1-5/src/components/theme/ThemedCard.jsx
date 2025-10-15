import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const ThemedCard = () => {
  const { themeStyles } = useTheme();

  return (
    <div style={{ ...themeStyles, padding: "20px", borderRadius: "10px" }}>
      <h3>Kartu dengan Context Theme</h3>
      <p>Gaya tema berubah otomatis sesuai mode yang dipilih.</p>
    </div>
  );
};

export default ThemedCard;
