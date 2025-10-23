import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return <AppContext.Provider value={{ theme, toggleTheme }}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};
