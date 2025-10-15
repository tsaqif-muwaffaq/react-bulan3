import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Tamu", isLoggedIn: false });

  const login = (name) => setUser({ name, isLoggedIn: true });
  const logout = () => setUser({ name: "Tamu", isLoggedIn: false });

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook (opsional)
export const useUser = () => useContext(UserContext);
