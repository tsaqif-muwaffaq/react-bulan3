import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNotification } from "../../contexts/NotificationContext";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const { notifications, addNotification, clearNotifications } = useNotification();

  return (
    <header style={{ marginBottom: "20px" }}>
      <h2>🌍 Header Multi Context</h2>
      <button onClick={toggleLanguage}>
        Bahasa: {language === "id" ? "Indonesia" : "English"}
      </button>
      <p>🔔 Notifikasi: {notifications}</p>
      <button onClick={addNotification}>Tambah Notif</button>
      <button onClick={clearNotifications}>Hapus</button>
    </header>
  );
};

export default Header;
