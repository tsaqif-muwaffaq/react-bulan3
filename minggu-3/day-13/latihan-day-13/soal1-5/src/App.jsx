import React from "react";
import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { CartProvider } from "./contexts/CartContext";

import UserProfile from "./components/user/UserProfile";
import ThemedButton from "./components/theme/ThemedButton";
import ThemedCard from "./components/theme/ThemedCard";
import ThemedText from "./components/theme/ThemedText";
import Header from "./components/multi-context/Header";
import ProductList from "./components/cart/ProductList";
import CartDisplay from "./components/cart/CartDisplay";

import "./styles.css";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <NotificationProvider>
            <CartProvider>
              <div className="container">
                <h1>tugas react js day 13</h1>
                <Header />
                <ThemedButton />
                <ThemedCard />
                <ThemedText />
                <UserProfile />
                <ProductList />
                <CartDisplay />
              </div>
            </CartProvider>
          </NotificationProvider>
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
