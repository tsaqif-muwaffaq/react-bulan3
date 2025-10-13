import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const style = {
    background: theme === "light" ? "#eee" : "#333",
    color: theme === "light" ? "#333" : "#eee",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  };
  return <button style={style} onClick={toggleTheme}>Ganti Tema ({theme})</button>;
}

function ThemedText() {
  const { theme } = useContext(ThemeContext);
  const style = {
    color: theme === "light" ? "#000" : "#fff",
    background: theme === "light" ? "#fff" : "#111",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
  };
  return <p style={style}>Tema saat ini adalah {theme}</p>;
}

function ContextExample() {
  return (
    <ThemeProvider>
      <div style={{ padding: 20, textAlign: "center" }}>
        <h2>Context API Example</h2>
        <ThemedButton />
        <ThemedText />
      </div>
    </ThemeProvider>
  );
}

export default ContextExample;
